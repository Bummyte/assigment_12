

    function validatestiReporting(){
        let stidate = document.forms.stiReporting.stidate.value;
        let hp = document.forms.stiReporting.hprovider.value;        
        let pcf = document.forms.stiReporting.pcf.value;
        let contpp = document.forms.stiReporting.contPhone.value;
        let name = document.forms.stiReporting.stiname.value;
        let dob = document.forms.stiReporting.dob.value;
        let gender = document.forms.stiReporting.stiGender.value;
        let ethnicity = document.forms.stiReporting.ethnicity.value;
        let race = document.forms.stiReporting.race.value;
        let partnerSex = document.forms.stiReporting.partnersex.value;
        let ChlamydiaResult = document.forms.stiReporting.chlamydiaResult.value;
        let gonorrheaResult = document.forms.stiReporting.gonorrhea-result.value;
        let examReason = document.forms.stiReporting.reason.value;
        let diagnosis = document.forms.stiReporting.diagnosis.value;
        let site = document.forms.stiReporting.site.value;
    
        if(!stidate) {
            document.getElementById('stidateErr').innerHTML = "field is required";
            document.forms.stiReporting.stidate.focus();
            return false;
        }
    
        if(!hp){
            document.getElementById('hpErr').innerHTML = "field is required";
            document.forms.stiReporting.hprovider.focus();
            return false;
        }
    
        if(!pcf){
            document.getElementById('pcfErr').innerHTML = "field is required";
            document.forms.stiReporting.pcf.focus();
            return false
        }

        if(!contpp){
            document.getElementById('contPhoneErr').innerHTML = "field is required";
            document.forms.stiReporting.contPhone.focus();
            return false;
        }

        if(!name){
            document.getElementById('nameErr').innerHTML = "field is required";
            document.forms.stiReporting.stiname.focus();
            return false;
        }
    
        if(!dob){
            document.getElementById('dobErr').innerHTML = "field is required";
            document.forms.stiReporting.dob.focus();
            return false;
        }
    
        if(!gender){
            document.getElementById('genderErr').innerHTML = "field is required";
            document.forms.stiReporting.stiGender.focus();
            return false;
        }
    
        if(!ethnicity){
            document.getElementById('ethnicityErr').innerHTML = "field is required";
            document.forms.stiReporting.ethnicity.focus();
            return false;
        }
    
        if(!race){
            document.getElementById('raceErr').innerHTML = "field is required";
            document.forms.stiReporting.race.focus();
            return false;
        }
    
        if(!partnerSex){
            document.getElementById('partnersexErr').innerHTML = "field is required";
            document.forms.stiReporting.partnersex.focus();
            return false;
        }
    
        if(!ChlamydiaResult){
            document.getElementById('chlamydiaResultErr').innerHTML = "field is required";
            document.forms.stiReporting.chlamydiaResult.focus();
            return false;
        }
    
        if(!gonorrheaResult){
            document.getElementById('gonorrheaResultErr').innerHTML = "field is required";
            document.forms.stiReporting.gonorrheaResult.focus();
            return false;
        }
    
        if(!examReason){
            document.getElementById('reasonErr').innerHTML = "field is required";
            document.forms.stiReporting.reason.focus();
            return false;
        }
    
        if(!diagnosis){
            document.getElementById('diagnosisErr').innerHTML = "field is required";
            document.forms.stiReporting.diagnosis.focus();
            return false;
        }
    
        if(!site){
            document.getElementById('siteErr').innerHTML = "field is required";
            document.forms.stiReporting.site.focus();
            return false;
        }
    
        

    }
    

    function validatename(){
        let name = document.getElementById('stiname').value;
        let namepattern = /^[A-Za-z\s]*$/
        if(name){
            let X = namepattern.test(name);
            if(X==false){
                document.getElementById('nameErr').innerHTML = "</br>Name must contain upper or lower cases with white space";
            }
            else{
                document.getElementById('nameErr').innerHTML = "";
                document.getElementById('stiname').style.borderColor="green";
            }
        }
    }
    
    
/*function validatereg(){
    let regname = document.forms.regg.regname.value;

    if(!regname){
        document.getElementById('regErr').innerHTML= "invalid name";
        document.getElementById('regname').focus();
        return fa
    }
    else{
        document.getElementById('regname').innerHTML= "";
    }
}*/
    
    
 
    