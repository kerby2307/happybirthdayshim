let clickCount = 0;
function showMessage() {
    let box = document.getElementById("message-box");
    box.classList.remove("hidden");
    
    clickCount++;

    if (clickCount === 1){
    box.className = "justify";
    box.innerText = "HAPPY BIRTHDAYYYYY!!! sana magustuhan mo this, even if it's not much. Please know that I truly mean every word you'll read. I just wanted to wish you the happiest birthday and remind you how much you're appreciated. \n\n 1of 6";
    } else if (clickCount === 2){
        box.className = "justify";
        box.innerText = `Helloooooo Ashimmm, HAPPY BIRTHDAY!!! Enjoy your day. I just wanted to take this moment to wish you the happiest of birthdays! May your day be as beautiful as you are. You're truly an amazing person, and you have this way of making everyone around you feel safe when talking to you. I hope this day brings you all the happiness you deserve, and may it be fulfilled with joy. you made it to another year, and that's something to be proud of. You've done your best. You nailed it through today, Ashim, soooo congratulations, I'm so proud of you. I'm sure many other people are proud of you too — not just me me, so wag na mag ver 2? HAHAHAHHA continue being the cheerful girl. It's up to you, naman, if ver 2 or 1, but I like this version of Ash more.
    
        2 of 6`;
        
        }  else if (clickCount === 3){
            box.className = "justify"
            box.innerText = `You've made it through another year, congrats HAHHAH. I know life has been harsh lately, but look at you, so galing ka oh nalagpasan mo lahat yon, there is no problem stronger than you. All your hard work will soon pay off, and when that happens, you'll thank yourself for not giving up — I'll be the one clapping the loudest... k fine I might not be the one, but I'll be one of the people cheering for you the hardest.

 I know we've only known each other for a short time, but I've been so comfortable with you, and you've already been one of the closest to me. Just know that I'm always here to listen to your rants and chikas. I may not be great with words, but I sure can listen. Don't hesitate to talk to me whenever you need someone to talk to, ah, it does not bother me or anything. I'll always have time for you if you need it. I know strong ka, but it is better if you open up to someone. It's hard kaya, if sasarilihin mo lang problems mo, but if you're not comfortable opening up to anyone, or you're not ready — it's fineeeee. I just hope that whatever happens, always find a reason to keep going, because I'm confident you'll get through them, no matter how big the challenges are. Never stop smiling, Ashimmmm ha, I like your smile, a lot, I swear. Pag nag ccompliment me sayo totoo yon duhh walang joke time don🙄. Yung mga next one is tula na so yushhh.

 3 of 6
`;
        }
        else if (clickCount === 4){
        box.className = "center"
        box.innerText = ` 6:32am
        
I like your curls—
how they twist with life,
spiraling down soft like feathers,
glowing like the morning light.

Each strand has its own story,
a rhythm not meant to hide,
a dance of wild, soft freedom—
the beauty in every curve and tide.

4 of 6`;
    } else if (clickCount === 5){
        box.className = "center"
        box.innerText = ` CATERPILLAR

 No matter how small the steps she take 
The earth still feels them — soft, awake.
Each inch she crawl, and breathe she takes a path she make no fear can break.

Within its shroud, a fragile thread,
May she find life, and shed the dread.
From darkest night, in the quiet cocoon
One day she'll rise, and touch the moon.

5 of 6`;
    } else if (clickCount === 6){
        box.className = "center"
        box.innerText = "THANK YOU SO MUCH FOR READING!!! HAPPY BIRTHDAY ULIT ENJOYYY YOUR DAYY HAAA!! \n I hab surprise click mo pa last 2 clicks na \n \n 6 of 6";
      ;
    }  else if (clickCount === 7) {
            box.innerText = "no moreee";
         box.innerHTML=
       '<img src="ashim.gif">'}
       else {
        box.innerText= "none"
        box.innerHTML= `<img src="shing.gif" class="full">`
       }
}
