$(document).ready(function() {
  const drumPad = $('.drum-pad');
  const volumeSlider = $('#slider');
  const kitType = $('#kit');
  const power = $('#power');
  const display = $('#display p');

  $(document).on("keydown", onButtonClick);
    drumPad.on("click", onButtonClick); 
    volumeSlider.on('input',updateVolume)
    kitType.on('input', updateKit)
    power.on('input', updatePower)

    function onButtonClick(e){
    let drum = e.key || e.target.innerText ;
        drum = drum.toUpperCase()
      
        if(letters.includes(drum)){
             drum; 
        }  else{
            return false;
        } 
 
      let audio = $('#'+drum);
        
      if(kitType.is(':checked') === true){
       audio.attr('src', soulClips[drum].url)
       display.text(soulClips[drum].name)

     } else{
      audio.attr('src', heaterClips[drum].url) 
      display.text(heaterClips[drum].name) 
    }

     audio.get(0).volume = volume
     audio.get(0).play()

    audio.parent().addClass('active')
    setTimeout(() => audio.parent().removeClass('active'), 200)
    
    setTimeout(() =>  display.text(''), 200)
   }

 function updateVolume(){ 
     volume = (this.value - 0) / 100;

    display.text('Volume ' + this.value);
    setTimeout(() =>  display.text(''), 400)
 }
 
function updateKit(){
     if(kitType.is(':checked') === true){
        display.text('Electro Soul Kit');
 } else{
      display.text('Heater Kit');
 }
 }

 function updatePower(){
  if(power.is(':checked') === true){
    $(document).off("keydown", onButtonClick);
    drumPad.off("click", onButtonClick); 
    volumeSlider.off('input',updateVolume)
    kitType.off('input', updateKit)
    display.text('')
} else{
  $(document).on("keydown", onButtonClick);
    drumPad.on("click", onButtonClick); 
    volumeSlider.on('input',updateVolume)
    kitType.on('input', updateKit)
}
 }
  
var volume = 1; 
var letters = ['Q','W','E','A','S','D','Z','X','C'] 
var heaterClips = {
  Q : {
      name: 'Clap',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/35[kb]handclap.wav.mp3"
    },
  W : {
      name: 'Crash',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/95[kb]909-Crash-HD0.wav.mp3"
    },
  E : {
      name: 'Hit Hat',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/44[kb]909-HiHatOpen-DA.wav.mp3"
    },
  A : {
      name: 'Ride',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/68[kb]909-Ride-D4.wav.mp3"
    },
  S : {
      name: 'High Tom',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/25[kb]909-HiTom-0D3.wav.mp3"
    },
  D : {
      name: 'Mid Tom',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/25[kb]909-MidTom-0D3.wav.mp3"
    },
  Z : {
      name: 'Low Tom',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/30[kb]909-LoTom-3D0.wav.mp3"
    },
  X : {
      name: 'Snare',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/20[kb]909-Snare-T0T7S3.wav.mp3"
    },
  C : {
      name: 'Kick',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/9[kb]909-Kick-TAAAD0.wav.mp3"
    }
  }

var soulClips = {
  Q :  {
      name: 'High Bongo',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/22[kb]BONGOHI.wav.mp3"
    },
  W :  {
      name: 'Mid Bongo',
      url: src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/18[kb]BONGOMI.wav.mp3"
   },
  E :  {
      name: 'Low Bongo',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/26[kb]BONGOLO.wav.mp3"
   },
  A :   {
      name: 'Clap',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/13[kb]CLAP1.wav.mp3"
   },
  S :  {
      name: 'Mark Tree',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/256[kb]PERCWIND.wav.mp3"
  },
  D :  {
      name: 'Crash',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/163[kb]Crashclassic.wav.mp3"
   },
  Z :  {
      name: 'High Tom',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/49[kb]TTROCKHI.wav.mp3"
   },
  X :  {
      name: 'Mid Tom',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/54[kb]TTROCKMI.wav.mp3"
    },
  C : {
      name: 'Low Tom',
      url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electro%20Soul%20Kit/63[kb]TTROCKLO.wav.mp3"
    }
}
  

});

