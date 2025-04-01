//INTRODUCTION AND CONSENT

//INITIALISE
var jsPsych = initJsPsych({
  on_finish: function () {
    let study_id = jatos.urlQueryParameters.STUDY_ID;
    let session_id = "tiktok_01"; //jatos.urlQueryParameters.SESSION_ID;

    let consent_data = jatos.studySessionData.consent_final;
    let age_data = jatos.studySessionData.age;
    let gender_data = jatos.studySessionData.gender;
    let race_data = jatos.studySessionData.race;
    let income_currency = jatos.studySessionData.curr;
    let income_data = jatos.studySessionData.income;
    let neuro_screen_data = jatos.studySessionData.neuro_screen;
    let neuro_conditions_ms_data = jatos.studySessionData.neuro_conditions_ms || false;
    let neuro_conditions_epilepsy_data = jatos.studySessionData.neuro_conditions_epilepsy || false;
    let neuro_conditions_tbi_data = jatos.studySessionData.neuro_conditions_tbi || false;
    let neuro_conditions_headache_data = jatos.studySessionData.neuro_conditions_headache || false;
    let neuro_conditions_parkinsons_data = jatos.studySessionData.neuro_conditions_parkinsons || false;
    let neuro_conditions_stroke_data = jatos.studySessionData.neuro_conditions_stroke || false;
    let neuro_conditions_none_data = jatos.studySessionData.neuro_conditions_none || false;
    let neuro_conditions_other_data = jatos.studySessionData.neuro_conditions_other || false;
    let neuro_conditions_other_text_data = jatos.studySessionData.neuro_conditions_other_text || "NA";
    let mh_screen_data = jatos.studySessionData.mh_screen;
    let mh_conditions_mdd_data = jatos.studySessionData.mh_conditions_mdd || false;
    let mh_conditions_bipolar_data = jatos.studySessionData.mh_conditions_bipolar || false;
    let mh_conditions_gad_data = jatos.studySessionData.mh_conditions_gad || false;
    let mh_conditions_ocd_data = jatos.studySessionData.mh_conditions_ocd || false;
    let mh_conditions_autism_data = jatos.studySessionData.mh_conditions_autism || false;
    let mh_conditions_none_data = jatos.studySessionData.mh_conditions_none || false;
    let mh_conditions_other_data = jatos.studySessionData.mh_conditions_other || false;
    let mh_conditions_other_text_data = jatos.studySessionData.mh_conditions_other_text || "NA";

    // Combine all filtered data into a single object
    let combinedData = {
      study_id: study_id,
      session_id: session_id,
      consent: consent_data,
      age: age_data,
      gender: gender_data,
      race: race_data,
      currency: income_currency,
      income: income_data,
      neuro_screen: neuro_screen_data,
      neuro_conditions_ms: neuro_conditions_ms_data,
      neuro_conditions_epilepsy: neuro_conditions_epilepsy_data,
      neuro_conditions_tbi: neuro_conditions_tbi_data,
      neuro_conditions_headache: neuro_conditions_headache_data,
      neuro_conditions_parkinsons: neuro_conditions_parkinsons_data,
      neuro_conditions_stroke: neuro_conditions_stroke_data,
      neuro_conditions_none: neuro_conditions_none_data,
      neuro_conditions_other: neuro_conditions_other_data,
      neuro_conditions_other_text: neuro_conditions_other_text_data,
      mh_screen: mh_screen_data,
      mh_conditions_mdd: mh_conditions_mdd_data,
      mh_conditions_bipolar: mh_conditions_bipolar_data,
      mh_conditions_gad: mh_conditions_gad_data,
      mh_conditions_ocd: mh_conditions_ocd_data,
      mh_conditions_autism: mh_conditions_autism_data,
      mh_conditions_none: mh_conditions_none_data,
      mh_conditions_other: mh_conditions_other_data,
      mh_conditions_other_text: mh_conditions_other_text_data,
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
    <p style="font-size:2em;line-height:1.5;color:#00008B"><b>Welcome to the experiment.</b></p>
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
    '<p style="font-size:1.25em;line-height:1.5;max-width:1400px"><em>Please read through the document, tick the box underneath the document to confirm you have read it' +
    ", and then press continue to proceed.</em></p>" +
    "<div>" +
    '<object data="files/information_sheet.pdf" type="application/pdf" style="width:80vw;height:70vh"></object>' +
    "</div>" +
    '<p style="font-size:1.25em">' +
    '<input type="checkbox" id="consent" name="consent" value="consent_tick" required>' +
    '<label style="margin-left:0.5em" for="consent">I confirm that I have read and understood the volunteer information contained in the above document.</label>' +
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

//DEMOGRAPHICS
let age = {
  type: jsPsychSurveyHtmlForm,
  trialType: "age",
  html: '<p><label style="font-size:1.25em;margin-right:1.75em;margin-bottom:1em" for="age"><b>How old are you?</b></label> <input style="width:3em;height:1em;font-size:1em;text-align:left;padding:5px" type="number" id="number" name="age" min="18" max="99" required></p>',
  on_finish: function (data) {
    let age_str = data.response.age;
    data.age = parseInt(age_str);
    jatos.studySessionData.age = parseInt(age_str);
  },
};
timeline.push(age);

let gender = {
  type: jsPsychSurveyHtmlForm,
  trialType: "gender",
  html: `
    <div style="text-align:center;">
      <p style="font-size:1.25em;line-height:1.5;margin-bottom:1em;max-width:1200px"><b>What is your gender?</b></p>
      <div style="display: inline-flex; flex-direction: column; align-items: start; font-size: 1em">
        <label style="font-size:1; margin-bottom: .5em; line-height:1.5;">
          <input type="radio" id="gen_female" name="gen" value="gen_female" required>
          <span style="margin-left: 0.5em;">Woman</span>
        </label>
        <label style="font-size:1; margin-bottom: .5em; line-height:1.5;">
          <input type="radio" id="gen_male" name="gen" value="gen_male">
          <span style="margin-left: 0.5em;">Man</span>
        </label>
        <label style="font-size:1; margin-bottom: .5em; line-height:1.5;">
          <input type="radio" id="gen_nonby" name="gen" value="gen_nonby">
          <span style="margin-left: 0.5em;">Non-binary</span>
        </label>
        <label style="font-size:1; margin-bottom: 1em; line-height:1.5;">
          <input type="radio" id="gen_other" name="gen" value="gen_other">
          <span style="margin-left: 0.5em">Other</span>
        </label>
      </div>
      </p>
    </div>
  `,
  on_finish: function (data) {
    let gend = data.response.gen;
    if (gend === "gen_female") {
      data.gender = "Female";
      jatos.studySessionData.gender = "Female";
    } else if (gend === "gen_male") {
      data.gender = "Male";
      jatos.studySessionData.gender = "Male";
    } else if (gend === "gen_nonby") {
      data.gender = "Non-binary";
      jatos.studySessionData.gender = "Non-binary";
    } else {
      data.gender = "Other";
      jatos.studySessionData.gender = "Other";
    }
  },
};
timeline.push(gender);

let race = {
  type: jsPsychSurveyHtmlForm,
  trialType: "race",
  html: `
    <div style="text-align: center;">
      <p style="font-size:1.25em;line-height:1;margin-bottom:1em;max-width:1200px"><b>Which of these best describes your ethnic group or background?</b></p>
      <div style="display: inline-flex; flex-direction: column; align-items: flex-start; font-size: 1em; max-width: 1200; margin: 0 auto;">
        <label style="font-size:1em; display: flex; align-items: center; margin-bottom: .5em;">
          <input type="radio" id="race_white" name="race" value="race_white" style="margin-right: 1em; vertical-align: middle; margin-top: -0.2em;" required>
          <span>White (e.g. English, Welsh, Scottish, Northern Irish, Irish, Gypsy or Irish Traveller, German...)</span>
        </label>
        <label style="font-size:1em; display: flex; align-items: center; margin-bottom: .5em;">
          <input type="radio" id="race_black" name="race" value="race_black" style="margin-right: 1em; vertical-align: middle; margin-top: -0.2em;">
          <span>Black, African, Caribbean, or Black British (e.g. African, Caribbean, African American...)</span>
        </label>
        <label style="font-size:1em; display: flex; align-items: center; margin-bottom: .5em;">
          <input type="radio" id="race_asian" name="race" value="race_asian" style="margin-right: 1em; vertical-align: middle; margin-top: -0.2em;">
          <span>Asian or Asian British (e.g. Indian, Pakistani, Bangladeshi, Chinese...)</span>
        </label>
        <label style="font-size:1em; display: flex; align-items: center; margin-bottom: .5em;">
          <input type="radio" id="race_mixed" name="race" value="race_mixed" style="margin-right: 1em; vertical-align: middle; margin-top: -0.2em;">
          <span>Mixed or multiple ethnic groups (e.g. White and Black Caribbean, White and Black African, White and Asian...)</span>
        </label>
        <label style="font-size:1em; display: flex; align-items: center; margin-bottom: 1em;">
          <input type="radio" id="race_other" name="race" value="race_other" style="margin-right: 1em; vertical-align: middle; margin-top: -0.2em;">
          <span>Other ethnic group (e.g. Arab, Pacific Islander, Aboriginal...)</span>
        </label>
      </div>
    </div>
  `,
  on_finish: function (data) {
    let race = data.response.race;
    if (race === "race_white") {
      data.race = "White";
      jatos.studySessionData.race = "White";
    } else if (race === "race_black") {
      data.race = "Black";
      jatos.studySessionData.race = "Black";
    } else if (race === "race_asian") {
      data.race = "Asian";
      jatos.studySessionData.race = "Asian";
    } else if (race === "race_mixed") {
      data.race = "Mixed";
      jatos.studySessionData.race = "Mixed";
    } else {
      data.race = "Other";
      jatos.studySessionData.race = "Other";
    }
  },
};
timeline.push(race);

let income = {
  type: jsPsychSurveyHtmlForm,
  trialType: "income",
  html:
    "<p>" +
    '<label style="font-size:1.25em;margin-right:2em; margin-bottom: 1; line-height:1.5;max-width:1200px" for="income"><b>What was your approximate personal total annual income (before taxes) ' +
    "last year (to the nearest 100)?" +
    "</b>" +
    "</label>" +
    "</p>" +
    '<p style = "font-size:1em;margin-right:1.5em;line-height:1.5;max-width:1200px">' +
    '<span style="margin-left:1em;" class="dropdown">' +
    '<select style="font-size:1em;" id="currency" name="currency" id="dropdown" required>' +
    '<option id="gbp" name="income" value="gbp">GBP (£)</option>' +
    '<option id="usd" name="income" value="usd">USD ($)</option>' +
    '<option id="eur" name="income" value="eur">EUR (€)</option>' +
    "</select>" +
    "</span>" +
    '<input style="width:5em;height:1em;font-size:1em;text-align:right" type="number" id="number" name="income" min="0" step="100" required>' +
    "</p>",
  on_finish: function (data) {
    {
      const responses = data.response;
      const income = parseInt(responses.income, 10);
      const currency = responses.currency;

      data.income = income;
      data.income_currency = currency;
      jatos.studySessionData.income = income;
      jatos.studySessionData.curr = currency;
    }
  },
};
timeline.push(income);

let neuro_screen = {
  type: jsPsychSurveyHtmlForm,
  trialType: "neuro_screen",
  html: ` <div style="text-align: center;">
      <p style="font-size:1.25em;margin-bottom:1em">
        <b>Have you ever been diagnosed with a neurological disorder (e.g. epilepsy or multiple sclerosis)</b>
      </p>
      <p style="margin-bottom:1em;">
        <input type="radio" id="YES" name="have_neuro" value="neuro_yes" required>
        <label for="YES" style="font-size:1em;">Yes</label>
      </p>
      <p style="margin-bottom:2em;">
        <input type="radio" id="NO" name="have_neuro" value="neuro_no">
        <label for="NO" style="font-size:1em;">No</label>
      </p>
    </div>`,
  button_label: "Continue",
  on_finish: function (data) {
    let have_neuro_response = jsPsych.data.get().last(1).values()[0].response;

    if (have_neuro_response.have_neuro === "neuro_no") {
      data.neuro_screen = 0;
      jatos.studySessionData.neuro_screen = 0;
    } else if (have_neuro_response.have_neuro === "neuro_yes") {
      data.neuro_screen = 1;
      jatos.studySessionData.neuro_screen = 1;
    } else {
    }
  },
};
timeline.push(neuro_screen);

let neuro = {
  conditional_function: function () {
    let neuro_screen = jsPsych.data.get().last(1).values()[0].neuro_screen;
    return neuro_screen;
  },
  timeline: [
    {
      type: jsPsychSurveyHtmlForm,
      trialType: "neuro",
      html: `
        <div style="text-align: center;">
          <p style="font-size:1.25em; line-height:1.5; margin-bottom: 1em;"><b>What neurological disorder(s) have you been diagnosed with? Select all that apply.</b></p>
          <div style="display: inline-flex; flex-direction: column; align-items: flex-start; font-size: 1em; max-width: 800px; margin: 0 auto;">
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="ms" name="neuro" value="ms" style="margin-right: 1em; vertical-align: middle;">
              <span>Multiple Sclerosis (MS)</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="epilepsy" name="neuro" value="epilepsy" style="margin-right: 1em; vertical-align: middle;">
              <span>Epilepsy</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="tbi" name="neuro" value="tbi" style="margin-right: 1em; vertical-align: middle;">
              <span>Traumatic brain injury (TBI)</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="headache" name="neuro" value="headache" style="margin-right: 1em; vertical-align: middle;">
              <span>Headache disorder</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="parkinsons" name="neuro" value="parkinsons" style="margin-right: 1em; vertical-align: middle;">
              <span>Parkinson&apos;s Disease (PD)</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="stroke" name="neuro" value="stroke" style="margin-right: 1em; vertical-align: middle;">
              <span>Stroke</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="none" name="neuro" value="none" style="margin-right: 1em; vertical-align: middle;">
              <span>No neurological disorder</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 2em;"> <!-- Increased bottom margin for "Other" -->
              <input type="checkbox" id="other" name="neuro" value="other" style="margin-right: 1em; vertical-align: middle;">
              <span>Other (please specify)</span>
              <input style="font-size:1; margin-left: 1em; width: 200px; vertical-align: middle;" type="text" id="other_text" name="other_text" required disabled />
            </label>
          </div>
        </div>
      `,
      dataAsArray: true,
      on_load: function () {
        document
          .getElementById("other")
          .addEventListener("change", function () {
            document.getElementById("other_text").disabled = !this.checked;
          });
      },
      on_finish: function (data) {
        let all_conditions = {
          ms: false,
          epilepsy: false,
          tbi: false,
          headache: false,
          parkinsons: false,
          stroke: false,
          none: false,
          other: false,
          other_text: "NA",
        };
      
        data.response.forEach((item) => {
          if (item.name === "neuro") {
            all_conditions[item.value] = true;
          } else if (item.name === "other_text") {
            all_conditions["other_text"] = item.value.trim() || "NA";
          }
        });
      
        let flat_conditions = {};
        for (const [key, value] of Object.entries(all_conditions)) {
          flat_conditions[`neuro_conditions_${key}`] = value;
        }
      
        jatos.studySessionData = {
          ...jatos.studySessionData,
          ...flat_conditions,
        };
      }      
    },
  ],
};
timeline.push(neuro);

let mh_screen = {
  type: jsPsychSurveyHtmlForm,
  trialType: "mh_screen",
  html: ` <div style="text-align: center;">
      <p style="font-size:1.25em;margin-bottom:1em;max-width: 1200px;">
        <b>Have you ever been diagnosed with a mental health or neurodevelopmental condition (e.g. anxiety or autism)?</b>
      </p>
      <p style="margin-bottom:1em;">
        <input type="radio" id="YES" name="have_mh" value="mh_yes" required>
        <label for="YES" style="font-size:1em;">Yes</label>
      </p>
      <p style="margin-bottom:2em;">
        <input type="radio" id="NO" name="have_mh" value="mh_no">
        <label for="NO" style="font-size:1em;">No</label>
      </p>
    </div>`,
  button_label: "Continue",
  on_finish: function (data) {
    let have_mh_response = jsPsych.data.get().last(1).values()[0].response;

    if (have_mh_response.have_mh === "mh_no") {
      data.mh_screen = 0;
      jatos.studySessionData.mh_screen = 0;
    } else if (have_mh_response.have_mh === "mh_yes") {
      data.mh_screen = 1;
      jatos.studySessionData.mh_screen = 1;
    } else {
    }
  },
};
timeline.push(mh_screen);

let mental_health = {
  conditional_function: function () {
    let mh_screen = jsPsych.data.get().last(1).values()[0].mh_screen;
    return mh_screen;
  },
  timeline: [
    {
      type: jsPsychSurveyHtmlForm,
      trialType: "mh",
      html: `
        <div style="text-align: center;">
          <p style="font-size:1.25em; line-height:1.5; margin-bottom: 1em;"><b>What mental health or neurodevelopmental condition(s) have you been diagnosed with? Select all that apply.</b></p>
          <div style="display: inline-flex; flex-direction: column; align-items: flex-start; font-size: 1em; max-width: 800px; margin: 0 auto;">
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="mdd" name="mh" value="mdd" style="margin-right: 1em; vertical-align: middle;">
              <span>Major Depressive Disorder (MDD)</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="bipolar" name="mh" value="bipolar" style="margin-right: 1em; vertical-align: middle;">
              <span>Bipolar Disorder (BPD)</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="gad" name="mh" value="gad" style="margin-right: 1em; vertical-align: middle;">
              <span>Generalized Anxiety Disorder (GAD)</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="ocd" name="mh" value="ocd" style="margin-right: 1em; vertical-align: middle;">
              <span>Obsessive-Compulsive Disorder (OCD)</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="autism" name="mh" value="autism" style="margin-right: 1em; vertical-align: middle;">
              <span>Autism</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 0.5em;">
              <input type="checkbox" id="none" name="mh" value="none" style="margin-right: 1em; vertical-align: middle;">
              <span>No mental health or neurodevelopmental condition</span>
            </label>
            <label style="display: flex; align-items: center; margin-bottom: 2em;">
              <input type="checkbox" id="other" name="mh" value="other" style="font-size:1.25; margin-right: 1em; vertical-align: middle;">
              <span>Other (please specify)</span>
              <input style="font-size:1;margin-left: 1em; width: 200px; vertical-align: middle;" type="text" id="other_text" name="other_text" required disabled />
            </label>
          </div>
        </div>
      `,
      dataAsArray: true,
      on_load: function () {
        document
          .getElementById("other")
          .addEventListener("change", function () {
            document.getElementById("other_text").disabled = !this.checked;
          });
      },
      on_finish: function (data) {
        let all_conditions = {
          mdd: false,
          bipolar: false,
          gad: false,
          ocd: false,
          autism: false,
          none: false,
          other: false,
          other_text: "NA",
        };
      
        data.response.forEach((item) => {
          if (item.name === "mh") {
            all_conditions[item.value] = true;
          } else if (item.name === "other_text") {
            all_conditions["other_text"] = item.value.trim() || "NA";
          }
        });
      
        let flat_conditions = {};
        for (const [key, value] of Object.entries(all_conditions)) {
          flat_conditions[`mh_conditions_${key}`] = value;
        }
      
        jatos.studySessionData = {
          ...jatos.studySessionData,
          ...flat_conditions,
        };
      }      
    },
  ],
};
timeline.push(mental_health);

let next_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
  <p style="font-size:1.25em; line-height:1.5; margin-bottom: 1em;"><b>In the next part of the experiment, you will complete a game where an octopus chases TikTok logos.</b><p>
    <p style="font-size:1.25; line-height:1.5; max-width: 1200px;">After the game, there will be a waiting period and you will bridge the time reading a range of magazines we provide, or watching TikTok</p>
    <p><strong>The more TikTok logos (points) you collect during the game, the more of the waiting time you will spend using TikTok.</strong></p>
    <p>Please click the &apos;Continue&apos; button to start the game.</p>
    `,
  choices: ["Continue"],
};
timeline.push(next_instructions);

//START
jatos.onLoad(() => {
  study_id = jatos.urlQueryParameters.STUDY_ID;
  session_id = jatos.urlQueryParameters.SESSION_ID;
  jsPsych.data.addProperties({ study_id: study_id, session_id: session_id });
  jsPsych.run(timeline);
});
