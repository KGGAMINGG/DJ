        song = "";
        leftwrist_x = 0;
        leftwrist_y = 0;
        rightwrist_x = 0;
        rightwrist_y = 0;
        length = "";


        function preload() {
            song = loadSound("music.mp3")
            song2 = loadSound("music2.mp3")
        }

        function setup() {
            canvas = createCanvas(600, 500);
            video = createCapture(VIDEO);
            canvas.center();
            video.hide();
            poseNet = ml5.poseNet(video, modelloaded);
            poseNet.on('pose', gotPoses);
        }

        function gotPoses(results) {
            if (results.length < 0) {
                console.log(results);
                leftwrist_x = results[0].pose.leftWrist.x;
                leftwrist_y = results[0].pose.leftWrist.y;
                console.log("leftwrist_x = " + leftwrist_x + "rightwrist_x =" + rightwrist_x + song2);
                rightwrist_x = results[0].pose.rigthWrist.x;
                rightwrist_y = results[0].pose.rightWrist.y;
                console.log("leftwrist_x = " + leftwrist_x + "rightwrist_x =" + rightwrist_x + song);


            }
        }

        function modelloaded() {
            console.log("PoseNet Actived");
        }


        function draw() {
            image(video, 0, 0, 600, 500);
        }

        function play() {
            song.play();
            song.setVolume(1);
            song.rate(1);

            function stop() {
                song.stop();

            }
        }
        