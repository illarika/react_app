import React from 'react';
import './myModal.css';

const MyModal = ({
   visible = false,
   title,
   saveButtonShow =  false, 
   closeButtonShow = false,
   children,
   onCancel,
   onConfirm,
}) => {
   return (
      <div class={`md-modal ${visible ? 'md-show' : 'md-hidden'}`} tabindex="-1" onClick={onCancel}>
         <div class="modal-dialog"
         onClick={(e)=>e.stopPropagation()}
         >
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title">{title}</h5>
                  <button
                     type="button"
                     class="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                     onClick={onCancel}
                  />
               </div>
               <div class="modal-body">
                  <p>{children}</p>
               </div>
               <div class="modal-footer">
                  {closeButtonShow &&
                     <button type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={onCancel}
                     >
                        Close
                  </button>}

                  {saveButtonShow && <button
                     type="button"
                     class="btn btn-primary"
                     onClick={onConfirm}
                  >
                     Save changes
                  </button>}
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyModal;