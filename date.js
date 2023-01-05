
exports.getDate = function(){

const today = new Date ();

const dayoptions = {
    weekday: "long", 
    day: "numeric",
    month: "long"
};

return today.toLocaleDateString("en-US", dayoptions);

}


exports.getDay = function(){

    const today = new Date();
    
    const options = {
        weekday: "long", 
    };
    
    return day = today.toLocaleDateString("en-US", options);
    
    };

