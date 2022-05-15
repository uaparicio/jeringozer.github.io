let message = "";
        let salary;
        let hours;
        let days;
        let price;

        function validateField(val, id){
            if(!val)
                document.getElementById(id).innerText = "No puede estar vacío.";
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
                document.getElementById("hoursMsg").innerText = "¿Trabajas mas de 12 horas? Ojalá valga el esfuerzo.";
            if(hours > 18)
                document.getElementById("hoursMsg").innerText = "Nah, y cuando dormís?";
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
                
                if(price > salary)
                    document.getElementById("priceMsg").innerText = "Esa! ¿Te vas a dar un gustito?";
                else
                    document.getElementById("priceMsg").innerText = "";
                
                if(salaryPerHour != 0){
                    message = `Por una hora de tu trabajo, estas percibiendo aproximadamente $${salaryPerHour}.\n\n`;
                    if(resMin < 60){
                        message = message + `Lo que querés comprar equivale a aproximadamente ${resMin} minuto${resMin > 1 ? "s" : ""} de tu trabajo.`;    
                    } else {
                        if(resHour < hours){
                            message = message + `Lo que querés comprar equivale a aproximadamente ${resHour} hora${resHour > 1 ? "s" : ""} de tu trabajo.`;    
                        } else {
                            message = message + `Lo que querés comprar equivale a aproximadamente ${resHour/hours} dia${(resHour/hours) > 1 ? "s" : ""} de tu trabajo.`;    
                        }
                    }
                } else 
                    message = "Revisá los números por favor";
            } else 
                message = "";
                
            document.getElementById("msg").innerText = message;
        }