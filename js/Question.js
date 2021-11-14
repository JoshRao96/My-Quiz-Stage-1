class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput().attribute("placeholder","Enter Your Name Here....")
   //Create a input box to enter the number
   this.input2 = createInput().attribute("placeholder","Enter The Correct Answer")
    


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.greeting1 = createElement('h3')
    this.greeting2 = createElement('h4')
    this.greeting3 = createElement('h4')
    this.greeting4 = createElement('h4')
    this.greeting5 = createElement('h4')



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.greeting1.html("Question:- What starts and ends with teh letter E, but only has one letter?")
    this.greeting2.html("1.Everyone")
    this.greeting3.html("2.Envelope")
    this.greeting4.html("3.Estimate")
    this.greeting5.html("4.Example")
    

    this.greeting1.position(80,60);
    this.greeting2.position(80,80);
    this.greeting3.position(80,100);
    this.greeting4.position(80,120);
    this.greeting5.position(80,140);

    this.message.position(290,300)
    
    this.input1.position(150, 230);
    this.input2.position(400, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.message.html("Thank you, Your Answer Has been Submitted")

    })


  }
}
