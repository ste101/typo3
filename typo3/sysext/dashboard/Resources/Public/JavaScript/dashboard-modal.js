/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
import{default as Modal}from"@typo3/backend/modal.js";import{SeverityEnum}from"@typo3/backend/enum/severity.js";import RegularEvent from"@typo3/core/event/regular-event.js";class DashboardModal{constructor(){this.selector=".js-dashboard-modal",this.initialize()}initialize(){new RegularEvent("click",(function(e){e.preventDefault();const t=new DocumentFragment;t.append(document.getElementById(`dashboardModal-${this.dataset.modalIdentifier}`).content.cloneNode(!0));const a={type:Modal.types.default,title:this.dataset.modalTitle,size:Modal.sizes.medium,severity:SeverityEnum.notice,content:t,additionalCssClasses:["dashboard-modal"],callback:e=>{new RegularEvent("submit",(()=>e.hideModal())).delegateTo(e,".dashboardModal-form"),e.addEventListener("button.clicked",(t=>{if("save"===t.target.getAttribute("name")){e.querySelector("form").requestSubmit()}else e.hideModal()}))},buttons:[{text:this.dataset.buttonCloseText,btnClass:"btn-default",name:"cancel"},{text:this.dataset.buttonOkText,active:!0,btnClass:"btn-info",name:"save"}]};Modal.advanced(a)})).delegateTo(document,this.selector)}}export default new DashboardModal;