//SURVEY

//INITIALISE
var jsPsych = initJsPsych({
  on_finish: function () {
    let subj_id = jatos.urlQueryParameters.SUBJ_ID;
    let session_id = "netflix_01"; //jatos.urlQueryParameters.SESSION_ID;

    let task1_response_data = jatos.studySessionData.task_one;
    let task1_text_data = jatos.studySessionData.task_one_text;
    let task2_response_data = jatos.studySessionData.task_two;
    let task2_text_data = jatos.studySessionData.task_two_text;    
    let strap_data = jatos.studySessionData.strap_responses.map(response => ({
      [`strap_${response.question_no}`]: response.response
    }));
    let strap = Object.assign({}, ...strap_data);
    let shows_watched_data = jatos.studySessionData.shows_watched;
    let watch_netflix_data = jatos.studySessionData.watch_engagement;
    let watch_netflix_text_data = jatos.studySessionData.watch_no_text;
    let screentime_average_data = jatos.studySessionData.screentime_average;

    //COMBINE DATA
    let combinedData = {
      subj_id: subj_id,
      session_id: session_id,
      task_1_response: task1_response_data,
      task1_text: task1_text_data,
      task_2_response: task2_response_data,
      task2_text: task2_text_data,      
      ...strap,
      shows_watched: shows_watched_data,
      watch_netflix: watch_netflix_data,
      watch_netflix_text: watch_netflix_text_data,     
      screentime_average: screentime_average_data,
    };

    let trialsJson = JSON.stringify(combinedData);

    jatos.submitResultData(trialsJson, jatos.startNextComponent);
  },
});

//TIMELINE SETTING
timeline = [];

//TASK QUESTIONS
let task_questions_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
      <p style="font-size:2em;line-height:1.5;color:#00008B"><b>Well done for completing the task!</b></p>
      <p style="font-size:1.25em;line-height:1.5;max-width:1200px">In the following, we will ask you a couple of questions about your experience playing the game.
      <p style="font-size:1.25em;line-height:1.5;max-width:1200px">Please answer all questions honestly, we will be checking for inattentive responding.</i></p>`,
  choices: ["Continue"],
};

let task_questions_1 = {
  timeline: [
    {
      type: jsPsychSurveyHtmlForm,
      html: `
        <div style="text-align:center;">
          <p style="font-size:1.5em; line-height:1.5; margin-bottom: 1em;">Did you change the hand and/or finger you used to make mouse clicks throughout the game?</p>
          
          <div style="display: inline-flex; flex-direction: column; align-items: start; font-size: 1.5em;">
            <label style="margin-bottom: 0.5em;">
              <input type="radio" id="task_one_no" name="task_one" value="task_one_no" required style="margin-right: 1em;">
              <span style="margin-left: 0.5em;">No, I consistently used the same finger</span>
            </label>

            <label style="margin-bottom: 1em;">
              <input type="radio" id="task_one_yes" name="task_one" value="task_one_yes" style="margin-right: 1em;">
              <span style="margin-left: 0.5em;">Yes (please specify)</span>
              <input style="margin-left: 1em; width: 250px;" type="text" id="task_one_text" name="task_one_text" required disabled />
            </label>
          </div>
        </div>
      `,
      dataAsArray: true,
      other_text_required: true,
      text_checkbox_pairs: [
        {
          checkbox_id: "task_one_yes",
          text_id: "task_one_text",
          required_message: "Please specify how you switched fingers",
        },
      ],
      data: { questionnaire: "TASK", question_no: "1" },
      on_load: function () {
        const yesRadio = document.getElementById("task_one_yes");
        const noRadio = document.getElementById("task_one_no");
        const textBox = document.getElementById("task_one_text");

        yesRadio.addEventListener("change", () => {
          if (yesRadio.checked) {
            textBox.disabled = false;
          }
        });

        noRadio.addEventListener("change", () => {
          if (noRadio.checked) {
            textBox.disabled = true;
            textBox.value = "";
          }
        });
      },
      on_finish: function (data) {
        let task_one_response = jsPsych.data.get().last(1).values()[0].response;
        
        let flattenedResponse = {
          task_one_text: "NA", 
        };
      
        task_one_response.forEach((item) => {
          if (item.name === "task_one") {
            flattenedResponse.task_one = item.value; 
          } else if (item.name === "task_one_text") {
            flattenedResponse.task_one_text = item.value.trim() || "NA"; 
          }
        });
      
        jatos.studySessionData = {
          ...jatos.studySessionData,
          ...flattenedResponse,
        };
      }      
    },
  ],
};

let task_questions_2 = {
  timeline: [
    {
      type: jsPsychSurveyHtmlForm,
      html: `
        <div style="text-align:center;">
          <p style="font-size:1.5em; line-height:1.5; margin-bottom: 1em;">Did you use any strategy to help your performance throughout the game?</p>

          <div style="display: inline-flex; flex-direction: column; align-items: start; font-size: 1.5em;">
            <label style="margin-bottom: 0.5em;">
              <input type="radio" id="task_two_no" name="task_two" value="task_two_no" required style="margin-right: 1em;">
              <span style="margin-left: 0.5em;">No, I did not use a strategy to facilitate the game</span>
            </label>

            <label style="margin-bottom: 1em;">
              <input type="radio" id="task_two_yes" name="task_two" value="task_two_yes" style="margin-right: 1em;">
              <span style="margin-left: 0.5em;">Yes (please specify)</span>
              <input style="margin-left: 1em; width: 250px;" type="text" id="task_two_text" name="task_two_text" required disabled/>
            </label>
          </div>
        </div>
      `,
      dataAsArray: true,
      other_text_required: true,
      text_checkbox_pairs: [
        {
          checkbox_id: "task_two_yes",
          text_id: "task_two_text",
          required_message: "Please specify the strategy you used",
        },
      ],
      data: { questionnaire: "TASK", question_no: "2" },
      on_load: function () {
        const yesRadio = document.getElementById("task_two_yes");
        const noRadio = document.getElementById("task_two_no");
        const textBox = document.getElementById("task_two_text");

        yesRadio.addEventListener("change", () => {
          if (yesRadio.checked) {
            textBox.disabled = false;
          }
        });

        noRadio.addEventListener("change", () => {
          if (noRadio.checked) {
            textBox.disabled = true;
            textBox.value = "";
          }
        });
      },
      on_finish: function (data) {
        let task_two_response = jsPsych.data.get().last(1).values()[0].response;
        
        let flattenedResponse = {
          task_two_text: "NA", 
        };
      
        task_two_response.forEach((item) => {
          if (item.name === "task_two") {
            flattenedResponse.task_two = item.value; 
          } else if (item.name === "task_two_text") {
            flattenedResponse.task_two_text = item.value.trim() || "NA"; 
          }
        });
      
        jatos.studySessionData = {
          ...jatos.studySessionData,
          ...flattenedResponse,
        };
      }
    },
  ],
};

let task = {
  timeline: [task_questions_instructions, task_questions_1, task_questions_2],
};

//NETFLIX USAGE
let netflix_instructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
    '<div style="text-align:center; max-width: 1440px; margin: 0 auto;">' +
    '<p style="font-size:1.5em;line-:1.5;"><b>Please let the experimenter know that you have completed the game.</b></p>' +
    '<p style="font-size:1.5em;line-:1.5;">You will be asked to watch Netflix or read magazines depending on the amount of points you accumulated.</p>' +
    '<p style="font-size:1.5em;line-:1.5;"><strong>During this time, questions will pop up on the screen. Please complete them as soon as they appear.</strong></p> ' +
    '<p style="font-size:1.5em;line-height:1.5;">Please do not engage in any other activities/ or use any other applications during this time. Failure to adhere to the instructions will lead to exclusion.</p> ' +
    '<input type="password" id="password-input" style="font-size:1.25em; padding:5px; margin:10px auto; display:block;"/>' +
    '<p id="error-message" style="color:red; font-size:1.25em; margin:10px 0; display:none;">Incorrect password. Please try again.</p>' +
    '<button id="continue-button" style="font-size:0.75em; padding:5px; margin:9px auto; display:block;" disabled>Continue</button>' +
    "</div>",
  choices: "NO_KEYS",
  on_load: function () {
    const button = document.getElementById("continue-button");
    const input = document.getElementById("password-input");
    const errorMessage = document.getElementById("error-message");

    input.addEventListener("input", function () {
      if (input.value.trim() === "orben2025") {
        //change password when necessary
        button.disabled = false;
        errorMessage.style.display = "none";
      } else {
        button.disabled = true;
        errorMessage.style.display = "none";
      }
    });

    button.addEventListener("click", function () {
      if (input.value.trim() === "orben2025") {
        //change password when necessary
        jsPsych.finishTrial();
      } else {
        errorMessage.style.display = "block";
      }
    });
  },
};

let netflix = {
  timeline: [netflix_instructions],
};

//NETFLIX TASK
let netflix_usage = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px">' +
    "<p><b>Please watch Netflix.</b></p>" +
    "</div>",
  choices: "NO_KEYS",
  trial_duration: 240000, // 4 minutes in milliseconds (240000); 4 minute mark
};

let strap_choices = [
  "<p>Extremely unpleasant</p>",
  "<p>Quite unpleasant</p>",
  "<p>Somewhat unpleasant</p>",
  "<p>Neutral</p>",
  "<p>Somewhat pleasant</p>",
  "<p>Quite pleasant</p>",
  "<p>Extremely pleasant</p>",
];

let strap_1 = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble:
        '<p style="color: black; padding: 20px;">Please answer the questions with respect to how you feel while watching Netflix now.</p>',
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_load: function () {
        let flashCount = 0;
        const interval = 300; // 300ms interval
        const flashColor = "#ff0000"; 
        const originalColor = "#ffffff"; 
        const endColor = '#FAA0A0';
        const flashInterval = setInterval(() => {
          if (flashCount % 2 === 0) {
            document.body.style.backgroundColor = flashColor; 
          } else {
            document.body.style.backgroundColor = originalColor; 
          }
          flashCount++;
          if (flashCount >= 4) {
            clearInterval(flashInterval);
            document.body.style.backgroundColor = endColor; 
          }
        }, interval);
      },
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let strap_response = parseInt(Object.values(responseObj)[0]);
        data.strap_response = strap_response + 1;
      
        if (!jatos.studySessionData.strap_responses) {
          jatos.studySessionData.strap_responses = [];
        }
      
        jatos.studySessionData.strap_responses.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.strap_response,
        });
      
        if (!jatos.studySessionData.flattened_strap) {
          jatos.studySessionData.flattened_strap = {};
        }
        jatos.studySessionData.flattened_strap[`strap_${jsPsych.timelineVariable("survey_question_no")}`] =
          data.strap_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How pleasant is watching Netflix right now?</b>",
        labels: strap_choices,
        name: "strap_one",
        required: true,
      },
      questionnaire: "STRAP",
      subscale: "Absorption",
      survey_question_no: 1,
    },
  ],
};

let netflix_usage_2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px">' +
    "<p><b>Please continue to watch Netflix.</b></p>" +
    "</div>",
  choices: "NO_KEYS",
  trial_duration: 180000, // 3 minutes in milliseconds (180000); 7 minute mark
  on_load: function () {
    document.body.style.backgroundColor = "#FFFFFF";
  },
};

let strap_2 = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble:
        '<p style="color: black; padding: 20px;">Please answer the questions with respect to how you feel while watching Netflix now.</p>',
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_load: function () {
        let flashCount = 0;
        const interval = 300; // 300ms interval
        const flashColor = "#ff0000"; 
        const originalColor = "#ffffff"; 
        const endColor = '#FAA0A0';
        const flashInterval = setInterval(() => {
          if (flashCount % 2 === 0) {
            document.body.style.backgroundColor = flashColor; 
          } else {
            document.body.style.backgroundColor = originalColor; 
          }
          flashCount++;
          if (flashCount >= 4) {
            clearInterval(flashInterval);
            document.body.style.backgroundColor = endColor; 
          }
        }, interval);
      },
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let strap_response = parseInt(Object.values(responseObj)[0]);
        data.strap_response = strap_response + 1;
      
        if (!jatos.studySessionData.strap_responses) {
          jatos.studySessionData.strap_responses = [];
        }
      
        jatos.studySessionData.strap_responses.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.strap_response,
        });
      
        if (!jatos.studySessionData.flattened_strap) {
          jatos.studySessionData.flattened_strap = {};
        }
        jatos.studySessionData.flattened_strap[`strap_${jsPsych.timelineVariable("survey_question_no")}`] =
          data.strap_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How pleasant is watching Netflix right now?</b>",
        labels: strap_choices,
        name: "strap_two",
        required: true,
      },
      questionnaire: "STRAP",
      subscale: "Absorption",
      survey_question_no: 2,
    },
  ],
};

let netflix_usage_3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px">' +
    "<p><b>Please continue to watch Netflix.</b></p>" +
    "</div>",
  choices: "NO_KEYS",
  trial_duration: 180000, // 3 minutes in milliseconds (180000); 10 minute mark
  on_load: function () {
    document.body.style.backgroundColor = "#FFFFFF";
  },
};

let strap_3 = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble:
        '<p style="color: black; padding: 20px;">Please answer the questions with respect to how you feel while watching Netflix now.</p>',
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_load: function () {
        let flashCount = 0;
        const interval = 300; // 300ms interval
        const flashColor = "#ff0000"; 
        const originalColor = "#ffffff"; 
        const endColor = '#FAA0A0';
        const flashInterval = setInterval(() => {
          if (flashCount % 2 === 0) {
            document.body.style.backgroundColor = flashColor; 
          } else {
            document.body.style.backgroundColor = originalColor; 
          }
          flashCount++;
          if (flashCount >= 4) {
            clearInterval(flashInterval);
            document.body.style.backgroundColor = endColor; 
          }
        }, interval);
      },
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let strap_response = parseInt(Object.values(responseObj)[0]);
        data.strap_response = strap_response + 1;
      
        if (!jatos.studySessionData.strap_responses) {
          jatos.studySessionData.strap_responses = [];
        }
      
        jatos.studySessionData.strap_responses.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.strap_response,
        });
      
        if (!jatos.studySessionData.flattened_strap) {
          jatos.studySessionData.flattened_strap = {};
        }
        jatos.studySessionData.flattened_strap[`strap_${jsPsych.timelineVariable("survey_question_no")}`] =
          data.strap_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How pleasant is watching Netflix right now?</b>",
        labels: strap_choices,
        name: "strap_three",
        required: true,
      },
      questionnaire: "STRAP",
      subscale: "Absorption",
      survey_question_no: 3,
    },
  ],
};

let netflix_end = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px">' +
    "<p><b>The waiting time is now over!</b></p>" +
    "<p>Please stop what you are doing and return your full attention to the experiment.</p> " +
    "<p>Press the 'Continue' button to proceed.</p>" +
    "</div>",
  choices: ["Continue"],
  on_load: function () {
    document.body.style.backgroundColor = "#FFFFFF";
  },
};

let netflix_task = {
  timeline: [
    netflix_usage,
    strap_1,
    netflix_usage_2,
    strap_2,
    netflix_usage_3,
    strap_3,
    netflix_end,
  ],
};

//ENGAGEMENT QUESTIONS
let engagement_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px;">' +
    "<p>Now we will ask you a few questions regarding your Netflix use during this experiment.</p>" +
    "</div>",
  choices: ["Continue"],
  on_load: function () {
    document.body.style.backgroundColor = "#FFFFFF";
  },
};

let watch_time = {
  timeline: [
    {
      type: jsPsychSurveyHtmlForm,
      html: `
          <div style="text-align:center;">
            <p style="font-size:1.25em; line-height:1.5; margin-bottom: 1em;"><b>Did you watch Netflix during the entire duration of the waiting period?</b></p>
            <div style="display: inline-flex; flex-direction: column; align-items: start; font-size: 1.25em;">
              <label style="margin-bottom: 0.5em;">
                <input type="radio" id="netflix_yes" name="netflix" value="netflix_yes" required style="margin-right: 1em;">
                <span style="margin-left: 0.5em;">Yes, I did.</span>
              </label>
  
              <label style="margin-bottom: 1em;">
                <input type="radio" id="netflix_no" name="netflix" value="netflix_no" style="margin-right: 1em;">
                <span style="margin-left: 0.5em;">No, I did not (please specify)</span>
                <input style="margin-left: 1em; width: 250px;" type="text" id="netflix_text" name="netflix_text" required disabled/>
              </label>
            </div>
          </div>
        `,
      dataAsArray: true,
      other_text_required: true,
      text_checkbox_pairs: [
        {
          checkbox_id: "netflix_no",
          text_id: "netflix_text",
          required_message: "Please specify how",
        },
      ],
      data: { questionnaire: "Netflix", question_no: "2" },
      on_load: function () {
        const yesRadio = document.getElementById("netflix_yes");
        const noRadio = document.getElementById("netflix_no");
        const textBox = document.getElementById("netflix_text");

        noRadio.addEventListener("change", () => {
          if (noRadio.checked) {
            textBox.disabled = false;
          }
        });

        yesRadio.addEventListener("change", () => {
          if (yesRadio.checked) {
            textBox.disabled = true;
            textBox.value = "";
          }
        });
      },
      on_finish: function (data) {
        let watch_response = jsPsych.data.get().last(1).values()[0].response;
      
        let flattenedResponse = {
          watch_no_text: "NA", 
        };
      
        watch_response.forEach((item) => {
          if (item.name === "netflix") {
            flattenedResponse.watch_engagement = item.value; 
          } else if (item.name === "netflix_text") {
            flattenedResponse.watch_no_text = item.value.trim() || "NA"; 
          }
        });
      
        jatos.studySessionData = {
          ...jatos.studySessionData,
          ...flattenedResponse,
        };
      },      
    },
  ],
};

let shows_watched = {
  type: jsPsychSurveyHtmlForm,
  trialType: "shows_watched",
  html: `
    <div style="text-align:center;">
      <p style="font-size:1.25em;line-height:1.5;margin-bottom:1em;max-width:1200px"><b>Did you watch the selected Netflix content without switching show/movie/video during the waiting period?</b></p>
      <div style="display: inline-flex; flex-direction: column; align-items: start; font-size: 1em">
        <label style="font-size:1; margin-bottom: .5em; line-height:1.5;">
          <input type="radio" id="sameshow_yes" name="sameshow" value="sameshow_yes" required>
          <span style="margin-left: 0.5em;">Yes</span>
        </label>
        <label style="font-size:1; margin-bottom: .5em; line-height:1.5;">
          <input type="radio" id="sameshow_no" name="sameshow" value="sameshow_no">
          <span style="margin-left: 0.5em;">No</span>
        </label>
      </div>
      </p>
    </div>
  `,
  on_finish: function (data) {
    let sameshowwatched = data.response.sameshow;
    if (sameshowwatched === "sameshow_yes") {
      data.shows_watched = "Yes";
      jatos.studySessionData.shows_watched = "Yes";
    } else if (sameshowwatched === "sameshow_no") {
      data.shows_watched = "No";
      jatos.studySessionData.shows_watched = "No";
    }
  },
};

let screentime_average = {
  type: jsPsychSurveyHtmlForm,
  html: `
      <div style="text-align: center; font-size: 25px;">
          <p>How much time do you spend watching Netflix on <strong>an average day</strong>?</p>
          <label for="hours">Hours:</label>
          <input type="number" id="hours" name="netflix_hours" style="width: 75px; height: 25px" min="0" max="23" required>
          <label for="minutes">Minutes:</label>
          <input type="number" id="minutes" name="netflix_minutes" style="width: 75px; height: 25px" min="0" max ="59" required>
      </div>
        <div style="height: 25px;"></div>
  `,
  on_finish: function (data) {
    const responses = data.response;
    const hours = parseInt(responses.netflix_hours) || 0;
    const minutes = parseInt(responses.netflix_minutes) || 0;

    const totalMinutes = hours * 60 + minutes;

    data.totalMinutes = totalMinutes;
    jatos.studySessionData.screentime_average = totalMinutes;
  },
};

let engagement = {
  timeline: [engagement_instructions, watch_time, shows_watched, screentime_average],
};

//END
let thank_you = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;color:#00008B;max-width:1200px;">' +
    '<h2 style="font-size:1.5em;margin-bottom:1em;text-align:center;line-height:1.5">Thank you for participating in the experiment!</h2>' +
    '<p>Please press "End" to complete the experiment.</p>' +
    "</div>",
  choices: ["End"],
};

//TIMELINE
let order = {
  timeline: [task, netflix, netflix_task, engagement, thank_you],
};
timeline.push(order);

//START
jatos.onLoad(() => {
  subj_id = jatos.urlQueryParameters.SUBJ_ID;
  session_id = jatos.urlQueryParameters.SESSION_ID;
  jsPsych.data.addProperties({ subj_id: subj_id, session_id: session_id });
  jsPsych.run(timeline);
});
