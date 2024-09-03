import { LightningElement } from 'lwc';

export default class NoteTakingApp extends LightningElement {
    showModal = false

    createNoteHandler(){
        this.showModal = true
    }

    closeModalHandler(){
        this.showModal = false
    }
}