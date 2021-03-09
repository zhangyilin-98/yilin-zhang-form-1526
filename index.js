
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let fm = document.getElementById('form');
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let sb = document.getElementById('submit');
let msg = document.getElementById('message');



function formValidator(e) {
    e.preventDefault();
	let data = {};
	let errors = [];
	
	// 1
	if (fn.value) {
		data.fullname = fn.value;
	} else {
		errors.push('Full name is required');
	}
	
	// 2.
	if (em.value) {
        if (pattern.test(em.value)){
            data.email = em.value;
        } else {
            errors.push('Email is invalid');
        }
    } else {
        errors.push('Email is required');
    }
    
     // 3. 
	if(msg.value) {
        data.message = msg.value;
    } else {
       errors.push('Message is required'); 
    }
    
    if (error.length ===0) {
        console.log(data);
        document.getElementById('form').reset();
    }else{
        
    }
	
	console.log(data, errors);
}

// Registering button for click event
sb.addEventListener('click', formValidator);