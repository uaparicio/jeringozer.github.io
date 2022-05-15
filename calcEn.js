let message = "";
        let salary;
        let hours;
        let days;
        let price;

        function validateField(val, id){
            if(!val)
                document.getElementById(id).innerText = "This cannot be empty.";
            else
                document.getElementById(id).innerText = "";
        }

        function validateFields(){
            validateField(salary, "salaryError");
            validateField(days, "daysError");
            validateField(hours, "hoursError");
            validateField(price, "priceError");
        }

        function allValid(){
            return (salary && hours && days && price) != 0;
        }

        function getValues() {
            salary = Number(document.getElementById("salary").value);
            d = document.getElementById("days");
            da = d.options[d.selectedIndex].value;
            days = Number(da);
            console.log(da);
            hours = Number(document.getElementById("hours").value);
            price = Number(document.getElementById("price").value);
        }
        
        function hourMessage() {
            if(hours > 12)
                document.getElementById("hoursMsg").innerText = "Do you really work more than 12 hours???";
            if(hours > 18)
                document.getElementById("hoursMsg").innerText = "WHEN DO YOU SLEEP?";
            if(hours <= 12)
                document.getElementById("hoursMsg").innerText = "";
        }

        function calculate(){
            getValues();
            hourMessage();
            validateFields();
            if(allValid()) {
                let totalHoursMonth = (4 * days * hours);
                let salaryPerHour = Math.round(salary / totalHoursMonth);
                let salaryPerMinute = salaryPerHour / 60;
                resHour = Math.ceil(price / salaryPerHour);
                resMin = Math.ceil(price / salaryPerMinute);
                
                if(salaryPerHour != 0){
                    message = `You are earning aproximately $${salaryPerHour} per hour.\n\n`;
                    if(resMin < 60){
                        message = message + `In order to buy that, you should work about ${resMin} minute${resMin > 1 ? "s" : ""}.`;    
                    } else {
                        if(resHour < hours){
                            message = message + `In order to buy that, you should work about ${resHour} hour${resHour > 1 ? "s" : ""}.`;    
                        } else {
                            message = message + `In order to buy that, you should work about ${resHour/hours} day${(resHour/hours) > 1 ? "s" : ""}.`;    
                        }
                    }
                } else 
                    message = "Please, check the values you entered.";
            } else 
                message = "";
                
            document.getElementById("msg").innerText = message;
        }