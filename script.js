function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if(question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-text').src = '#BAD/BROKENIMAGE' //CHANGE 
        return
    }

    if(!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color, backgroundColor;

    switch(randomNumber){
        case 0:
            answer ="YES";
            image ="img/smiley.png";
            color = "text-success";
            backgroundColor = "bg-info";
            break;
            case 1:
                answer = "No";
                image = "img/thumbsdown.png" //change this!!;
                color = "text-danger";
                break;
            case 2:
                answer = "Ask again later";
                image = "img/askagain.jpg" //change this!!;
                color = "text-secondary";
                break;
            case 3:
                answer = "Maybe";
                image = "maybe-image.jpg";//change this!!;
                color = "text-warning";
                break;
            case 4:
                answer = "Cannot predict now";
                image = "cannot-predict-image.jpg";//change this!!;
                color = "text-muted";
                break;
            case 5:
                answer = "Don't count on it";
                image = "dont-count-on-it-image.jpg";//change this!!;
                color = "text-danger";
                break;
            case 6:
                answer = "Most likely";
                image = "most-likely-image.jpg";//change this!!;
                color = "text-success";
                break;
            case 7:
                answer = "Outlook not so good";
                image = "outlook-not-good-image.jpg";//change this!!;
                color = "text-danger";
                break;
            default:
                break;
        }
    
    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-image').src = image;
    }



