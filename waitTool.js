var waitPage = function(){
    this.printMessage= function(){
        console.log('Message from node');
    };
   
};
module.exports = new waitPage;