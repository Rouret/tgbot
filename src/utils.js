module.exports = {
    parseContent(content) {
        //Status is for know if there are args or not
        //Exec is the command $ / ...
        //Command is the commande btw
        //Args is the array of args .. btw
        return_value = {
            "status": false,
            "exec": content[0],
            "command": "",
            "args": []
        };
        //Remove first character
        content = content.substr(1);
        //Split the string with a blank
        temp_content = content.split(" ");
        if (temp_content.length > 1) {
            //Define the status
            return_value.status = true; //useless because already false (default)
            //Define the command
            return_value.command = temp_content[0];
            //Remove first character 
            temp_content.shift();
            //User foreach to navigate in the array
            temp_content.forEach(arg => {
                //Push all args in the parameter args
                return_value.args.push(arg);
            });
        } else {
            //Define the status
            return_value.status = false; //useless because already false (default)
            //Define the command
            return_value.command = content;
        }
        //return the value
        return return_value;
    },
    getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}