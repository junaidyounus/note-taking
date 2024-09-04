import { LightningElement , api} from 'lwc';

export default class Notification extends LightningElement {
    showNotification = false
    message
    variant

    get notifyClasses(){
        let variantClass = this.variant === 'success' ? 'slds-theme_success':
        this.variant === 'warning' ? 'slds-theme_warning':
        this.variant === 'error' ? 'slds-theme_error':'slds-theme_info' 
        return `slds-notify slds-notify-toast ${variantClass}`
    }

    @api showToast(message, variant){
        this.showNotification = true
        this.message = message || "Please pass the message"
        this.variant = variant || 'success'
        setTimeout(()=>{
            this.showNotification = false
        }, 5000)

    }
}