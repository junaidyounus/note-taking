public with sharing class NoteTakingController {
    @AuraEnabled
    public static Boolean createNoteRecord(String title, String description) {
        try{
            if(!String.isBlank(title)){
                My_Note__c noteRec = new My_Note__c (Name=title, Note_Description__c=description);
                insert noteRec;
                return true;
            }
            return false;

        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }

    }
}