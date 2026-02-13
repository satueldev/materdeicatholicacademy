function getresults(){
     

    var info = document.getElementById('info')
    var head = document.getElementById('head')
    
    var idsection = document.getElementById('id-section');    
       
    info.style.display = 'none';
    
           //beginning of ss1 results//
                    if(document.getElementById("userinput").value === "SE01SS2"){
            document.getElementById("SE01SS2").style.display = 'block';
    document.getElementById("id-section").style.display = "none";
    
    
        } else     if(document.getElementById("userinput").value=== "AO02SS1"){
            document.getElementById("AO02SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none"; 
    
     
        } else     if(document.getElementById("userinput").value=== "EO03SS1"){
            document.getElementById("EO03SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
               
        } else     if(document.getElementById("userinput").value=== "VO04SS1"){
            document.getElementById("VO04SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
            
       } else     if(document.getElementById("userinput").value=== "VA05SS1"){
            document.getElementById("VA05SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
           
       }else     if(document.getElementById("userinput").value=== "VA06SS1"){
            document.getElementById("VA06SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
        
          
           }else     if(document.getElementById("userinput").value=== "BO07SS1"){
            document.getElementById("BO07SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none"; 
     
     
          } else     if(document.getElementById("userinput").value=== "IO08SS1"){
            document.getElementById("IO08SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
    
    
         }else     if(document.getElementById("userinput").value=== "PE09SS1"){
            document.getElementById("PE09SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none"; 
    
     
          }else     if(document.getElementById("userinput").value=== "PE10SS1"){
            document.getElementById("PE10SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
         
     
          }else     if(document.getElementById("userinput").value=== "JI11SS1"){
            document.getElementById("JI11SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
               
     
          }else     if(document.getElementById("userinput").value=== "IB12SS1"){
            document.getElementById("IB12SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";         
     
     
          }else     if(document.getElementById("userinput").value=== "EO13SS1"){
            document.getElementById("EO13SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";  
          
     
          }else     if(document.getElementById("userinput").value=== "JA14SS1"){
            document.getElementById("JA14SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none"; 
           
     
          }else     if(document.getElementById("userinput").value=== "OO15SS1"){
            document.getElementById("OO15SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";  
          
     
          }else     if(document.getElementById("userinput").value=== "DO16SS1"){
            document.getElementById("DO16SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
         
     
          }else     if(document.getElementById("userinput").value=== "TE17SS1"){
            document.getElementById("TE17SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
         
     
          }else     if(document.getElementById("userinput").value=== "AN18SS1"){
            document.getElementById("AN18SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";  
          
     
          }else     if(document.getElementById("userinput").value=== "PA19SS1"){
            document.getElementById("PA19SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
         
     
          }else     if(document.getElementById("userinput").value=== "DF20SS1"){
            document.getElementById("DF20SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";  
          
     
          }else     if(document.getElementById("userinput").value=== "EO21SS1"){
            document.getElementById("EO21SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";  
          
     
          }else     if(document.getElementById("userinput").value=== "VI22SS1"){
            document.getElementById("VI22SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none"; 
           
     
          }else     if(document.getElementById("userinput").value=== "FA23SS1"){
            document.getElementById("FA23SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
         
     
          }else     if(document.getElementById("userinput").value=== "FO24SS1"){
            document.getElementById("FO24SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
         
     
          }else     if(document.getElementById("userinput").value=== "MO25SS1"){
            document.getElementById("MO25SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";   
         
     
          }else     if(document.getElementById("userinput").value=== "BA26SS1"){
            document.getElementById("BA26SS1").style.display = 'block';
    document.getElementById("id-section").style.display = "none";
          }   
    else{
        alert('ERROR 404! either id is invalid, written in lowercase  or belongs to another class. Please check for these errors and try again :)')
     }
    }