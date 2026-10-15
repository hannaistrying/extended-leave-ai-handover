const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||undefined,args:['--no-sandbox']});const page=await browser.newPage();
 const requests=[];page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url())});page.on('dialog',d=>d.accept());
 await page.goto('file://'+path.resolve(__dirname,'../templates/leave-transition-plan.html'));
 await page.evaluate(()=>{
 document.querySelector('[data-field="overview-3"]').value='Regression user';
 addRow(document.querySelector('[data-section="responsibilities"] .add-row'));
 document.querySelector('[data-table="responsibilities"] tbody tr:last-child textarea').value='Added responsibility';
 document.querySelector('[data-table="contacts"] textarea').value='Contact after dynamic table';
 addRow(document.querySelector('[data-section="context"] .add-row'));
 document.querySelector('[data-table="context"] tbody tr:last-child textarea').value='Employee-only context';
 document.querySelector('[data-section="final-check"] input').checked=true;
 });
 const expected=await page.evaluate(()=>snapshot());await page.evaluate(()=>saveDraft());await page.reload();await page.evaluate(()=>loadDraft());
 assert.deepEqual(await page.evaluate(()=>snapshot()),expected,'reload restores rows and later fields');
 const downloadPromise=page.waitForEvent('download');await page.evaluate(()=>exportDraft());const download=await downloadPromise;const exportPath=await download.path();
 assert.deepEqual(JSON.parse(fs.readFileSync(exportPath)),expected,'export is structured');
 await page.reload();await page.locator('#import-file').setInputFiles(exportPath);await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('Answers imported'));
 assert.deepEqual(await page.evaluate(()=>snapshot()),expected,'import restores rows and checks');
 for(const data of [{schema:'leave-transition-plan',version:2,fields:{},tables:{}},[{value:'legacy'}]]){
 await page.locator('#import-file').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(data))});
 await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('Import failed'));
 assert.deepEqual(await page.evaluate(()=>snapshot()),expected,'bad import leaves form unchanged');
 }
 await page.evaluate(()=>clearSavedDraft());assert.equal(await page.evaluate(()=>localStorage.getItem(STORAGE_KEY)),null);
 const example=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../examples/completed-plan.json')));
 await page.evaluate(d=>applyDraft(d),example);
 assert.deepEqual(await page.evaluate(()=>snapshot()),example,'bundled example imports into blank template');
 assert.deepEqual(requests,[],'no external requests');
 console.log('PASS: reload/restore, added rows, later fields, checkboxes, export/import, malformed/legacy rejection, delete draft, no external requests.');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
