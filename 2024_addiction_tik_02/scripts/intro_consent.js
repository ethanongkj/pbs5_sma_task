//INTRODUCTION AND CONSENT

//INITIALISE
var jsPsych = initJsPsych({
  on_finish: function () {
    let subj_id = jatos.urlQueryParameters.SUBJ_ID;
    let session_id = "tiktok_02"; //jatos.urlQueryParameters.SESSION_ID;

    let consent_data = jatos.studySessionData.consent_final;

    // Combine all filtered data into a single object
    let combinedData = {
      subj_id: subj_id,
      session_id: session_id,
      consent: consent_data,
    };

    // Convert the combined data object to JSON
    let trialsJson = JSON.stringify(combinedData);

    // Submit the JSON data to JATOS and start the next component
    jatos.submitResultData(trialsJson, jatos.startNextComponent);
  },
});

//TIMELINE SETTING
timeline = [];

//WELCOME
let welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <p style="font-size:2em;line-height:1.2;color:#00008B"><b>Welcome back to the experiment.</b></p>
    <p style="font-size:1.25em;line-height:1.5;max-width:1200px">Before proceeding to the main part of the experiment, please carefully read the information sheet presented on the next page.
    <p style="font-size:1.25em;line-height:1.5;max-width:1200px">
    <br><i>Press any key to continue.</i></p>`,
  on_finish: function () {},
};
timeline.push(welcome);

//CONSENT
let consent = {
  type: jsPsychSurveyHtmlForm,
  html:
    '<p style="font-size:1.25em"><em>Please read through the document, tick the box underneath the document (at the bottom of the webpage) to confirm you have read it' +
    ", and then press continue to proceed.</em></p>" +
    "<div>" +
    '<object data="files/information_sheet.pdf" type="application/pdf" style="width:80vw;height:70vh"></object>' +
    "</div>" +
    '<p style="font-size:1.25em">' +
    '<input type="checkbox" id="consent" name="consent" value="consent_tick" required>' +
    '<label style="margin-left:0.5em" for="consent">I confirm that I have read and understand the volunteer information contained in the above document.</label>' +
    "</p>",
  button_label: "Continue",
  checkbox_required: true,
  list_questions: true,
  required_message:
    "Please tick this box to proceed with the experiment. If after reading the information sheet you no longer wish to take part, please let the experimenter know.",
};
timeline.push(consent);

let consent2 = {
  type: jsPsychSurveyHtmlForm,
  html:
    '<div style="width: 100%; display: flex; flex-direction:row;justify-content:center;margin-bottom:2em">' +
    '<div style="margin-center:4em;">' +
    '<img src="img/mrccbu.png" width="761px" height="91px"></div>' +
    "</div>" +
    "</div>" +
    '<div style="font-size:1em;line-height:1.5;text-align:justify;max-width:1250px;padding-left:1em;padding-right:1em">' +
    '<h2 style="font-size:1em;text-align:center;line-height:1.2">Consent Form</h2>' +
    '<p style="font-size:1em;text-align:center;line-height:1.2"><em>Study Title: Digital media and information processing</em></p>' +
    '<p style="margin-bottom:1em;text-align:center"><span><em>Principal Investigator</em>: Dr Amy Orben</span>' +
    '<span style="margin-left:1em"><em>CPREC Code</em>: PRE.2024.059</span>' +
    '<p><input type="checkbox" id="consent2" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent2">I have read and understood the Information Sheet and have had the opportunity to consider the information and what will be expected of me.</label></p>' +
    '<p><input type="checkbox" id="consent3" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent3">I consent to the processing of my personal information (i.e., gender, age, socio-demographic and wellbeing information) for the purposes explained to me.</label></p>' +
    '<p><input type="checkbox" id="consent4" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent4">I understand that all personal information will remain confidential and that all efforts will be made to ensure I cannot be identified (except as might be required by law).</label></p>' +
    '<p><input type="checkbox" id="consent5" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent5">I understand that my participation is voluntary and that I am free to withdraw at any time without giving a reason.</label></p>' +
    '<p><input type="checkbox" id="consent6" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent6">I understand that if I withdraw, any personal data I have provided up to that point will not be deleted unless I indicate otherwise. I may request my data to be deleted, however, it may be impossible to delete the anonymised record of your data.</label></p>' +
    '<p><input type="checkbox" id="consent7" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent7">I understand that this study\'s anonymised and aggregated data (not identifying personal information) may be published in a scientific research journal or a data repository.</label></p>' +
    '<p><input type="checkbox" id="consent8" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent8">I agree that my fully anonymised research data may be used by others for future research.</label></p>' +
    '<p><input type="checkbox" id="consent9" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent9">The data provided in this study will be archived in accordance with the General Data Protection Regulation.</label></p>' +
    '<p><input type="checkbox" id="consent10" name="consent" value="consent_tick" required ' +
    "oninvalid=\"this.setCustomValidity('You must tick all boxes to proceed with the experiment.')\" onchange=\"this.setCustomValidity('')\">" +
    '<label style="margin-left:0.5em" for="consent10">I voluntarily agree to take part in this study.</label></p>' +
    "<p style=\"font-size:1.25;margin-top:1.25em;text-align:center\"><em>By selecting 'confirm', I agree that I have read and confirmed the above statements, and I agree to take part.</em></p>" +
    '<div style="display: flex; justify-content: center; align-items: center;">' +
    '<div style="margin-right: 20px;">' +
    '<input type="radio" id="consent_yes" name="consent_final" value="consent_yes" required>' +
    '<label for="consent_yes" style="margin-left:0.5em;">Confirm</label>' +
    "</div>" +
    "<div>" +
    '<input type="radio" id="consent_no" name="consent_final" value="consent_no" required>' +
    '<label for="consent_no" style="margin-left:0.5em;">Do not confirm</label>' +
    "</div>" +
    "</div>" +
    "</p>" +
    "</div>",
  button_label: "Submit",
  list_questions: true,
  on_finish: function (data) {
    const consentResponse = data.response.consent_final;
    jatos.studySessionData.consent_final = consentResponse;
  },
};
timeline.push(consent2);

let stop_leave = {
  conditional_function: function () {
    if (jatos.studySessionData.consent_final === "consent_no") {
      return true;
    } else {
      return false;
    }
  },
  timeline: [
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus:
        '<h2 style="font-size:2em;line-height:1.2;color:#00008B">You have indicated you do not wish to take part, and so will be unable to continue with the study.</h2>',
      choices: "NO_KEYS",
    },
  ],
};
timeline.push(stop_leave);

var disclaimer = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<p style="font-size:1.25em;line-height:1.5;margin-bottom:2.5em;max-width:1200px">Throughout the experiment, we will be checking for inattentive responding. Please make sure to read all instructions in detail, respond honestly, and do not take any extended breaks during the study unless indicated otherwise.<br></br>During this experiment, you will be asked questions regarding your physical and mental well-being. We understand that answering these questions can make people aware of problems they may be having and if you have any concerns please contact the researcher or your doctor who can direct you to the appropriate local clinical services.</p>' +
    "</div>",
  choices: ["Continue"],
};
timeline.push(disclaimer);

let next_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
  <p style="font-size:1.25em; line-height:1.5; margin-bottom: 1em;"><b>In the next part of the experiment, you will complete a game where an octopus chases Netflix logos.</b><p>
    <p style="font-size:1.25; line-height:1.5; max-width: 1200px;">After the game, there will be a waiting period and you will bridge the time reading a range of magazines we provide, or using TikTok.</p>
    <p><strong>The more TikTok logos (points) you collect during the game, the more of the waiting time you will spend using TikTok.</strong></p>
    <p>Please click the &apos;Continue&apos; button to start the game.</p>
    `,
  choices: ["Continue"],
};
timeline.push(next_instructions);

//START
jatos.onLoad(() => {
  subj_id = jatos.urlQueryParameters.SUBJ_ID;
  session_id = jatos.urlQueryParameters.SESSION_ID;
  jsPsych.data.addProperties({ subj_id: subj_id, session_id: session_id });
  jsPsych.run(timeline);
});
