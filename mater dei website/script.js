let menucontent = document.getElementById('menu-conten')
let open = document.getElementById('menu')
let close = document.getElementById('close')
let f_name = document.getElementById('firstname')
let m_name = document.getElementById('middlename')
let l_name = document.getElementById('lastname')
let number = document.getElementById('phone')
let date_of_birth = document.getElementById('dob')
let add = document.getElementById('address')
let previous_school = document.getElementById('p-school')
function openmenu(){
    document.getElementById('close').style.display = 'block'
    document.getElementById('menu').style.opacity ='0'
    document.getElementById('menu-conten').style.marginLeft ='-10px'
    

}
function closemenu() {
    document.getElementById('menu').style.opacity ='1'
    document.getElementById('close').style.display = 'none'
    document.getElementById('menu-conten').style.marginLeft ='-180px'
}
function submitform(){
   console.log('FIRST NAME:' + ' ' + document.getElementById('firstname').value)
   console.log('MIDDLE NAME:' + ' ' + document.getElementById('middlename').value)
   console.log('LAST NAME:' + ' ' + document.getElementById('lastname').value)
   console.log('PHONE NUMBER:' + ' ' + document.getElementById('phone').value)
   console.log('D.O.B:' + ' ' + document.getElementById('dob').value)
   console.log('ADDRESS:' + ' ' + document.getElementById('address').value)
   console.log('PREVIOUS SCHOOL:' + ' ' + document.getElementById('p-school').value)   
}