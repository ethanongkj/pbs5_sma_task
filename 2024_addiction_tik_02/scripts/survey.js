//SURVEY

//INITIALISE
var jsPsych = initJsPsych({
  on_finish: function () {
    let subj_id = jatos.urlQueryParameters.SUBJ_ID;
    let session_id = "tiktok_02"; //jatos.urlQueryParameters.SESSION_ID;

    let task1_response_data = jatos.studySessionData.task_one;
    let task1_text_data = jatos.studySessionData.task_one_text;
    let task2_response_data = jatos.studySessionData.task_two;
    let task2_text_data = jatos.studySessionData.task_two_text;
    let strap_data = jatos.studySessionData.strap_responses.map((response) => ({
      [`strap_${response.question_no}`]: response.response,
    }));
    let strap = Object.assign({}, ...strap_data);
    let engagementvideos_data = jatos.studySessionData.number_videos;
    let watch_tiktok_data = jatos.studySessionData.watch_engagement;
    let watch_tiktok_text_data = jatos.studySessionData.watch_no_text;
    let check_freq_data = jatos.studySessionData.check_freq_responses.map(
      (response) => ({
        [`check_freq_${response.question_no}`]: response.response,
      })
    );
    let check_freq = Object.assign({}, ...check_freq_data);
    let screentime_before_data = jatos.studySessionData.screentime_before;
    let screentime_after_data = jatos.studySessionData.screentime_after;
    let screentime_average_data = jatos.studySessionData.screentime_average;
    let bsmas_tiktok_data = jatos.studySessionData.bsmas_tiktok_responses.map(
      (response) => ({
        [`bsmas_tiktok_${response.question_no}`]: response.response,
      })
    );
    let bsmas_tiktok = Object.assign({}, ...bsmas_tiktok_data);
    let bsmas_netflix_data = jatos.studySessionData.bsmas_netflix_responses.map(
      (response) => ({
        [`bsmas_netflix_${response.question_no}`]: response.response,
      })
    );
    let bsmas_netflix = Object.assign({}, ...bsmas_netflix_data);
    let bis_data = jatos.studySessionData.bis_responses
    .filter((response) => response.question === "BIS-11") 
    .map((response) => ({
      [`bis_${response.question_no}`]: response.response,
    }));
    let bis = Object.assign({}, ...bis_data);
    let phq_data = jatos.studySessionData.phq_responses
    .filter((response) => response.question === "PHQ") 
    .map((response) => ({
      [`phq_${response.question_no}`]: response.response,
    }));
    let phq = Object.assign({}, ...phq_data);
    let gad_data = jatos.studySessionData.gad_responses.map((response) => ({
      [`gad_${response.question_no}`]: response.response,
    }));
    let gad = Object.assign({}, ...gad_data);
    let cius_data = jatos.studySessionData.cius_responses
    .filter((response) => response.question === "CIUS") 
    .map((response) => ({
      [`cius_${response.question_no}`]: response.response,
    }));
    let cius = Object.assign({}, ...cius_data);
    let catch_responses = jatos.studySessionData.bis_responses
      .filter((response) => response.question === "CATCH_QUESTIONS")
      .map((response) => ({
        [`catch_questions_${response.question_no}`]: response.response,
      }))
      .reduce((obj, item) => Object.assign(obj, item), {});
    let catch_responses_2 = jatos.studySessionData.phq_responses
    .filter((response) => response.question === "CATCH_QUESTIONS")
    .map((response) => ({
      [`catch_questions_${response.question_no}`]: response.response,
    }))
    .reduce((obj, item) => Object.assign(obj, item), {});
    let catch_responses_3 = jatos.studySessionData.cius_responses
    .filter((response) => response.question === "CATCH_QUESTIONS")
    .map((response) => ({
      [`catch_questions_${response.question_no}`]: response.response,
    }))
    .reduce((obj, item) => Object.assign(obj, item), {});
    
    let all_drugs_tobacco_data = jatos.studySessionData.all_drugs_tobacco;
    let all_drugs_alcohol_data = jatos.studySessionData.all_drugs_alcohol;
    let all_drugs_cannabis_data = jatos.studySessionData.all_drugs_cannabis;
    let all_drugs_cocaine_data = jatos.studySessionData.all_drugs_cocaine;
    let all_drugs_amphetamine_data =
      jatos.studySessionData.all_drugs_amphetamine;
    let all_drugs_inhalants_data = jatos.studySessionData.all_drugs_inhalants;
    let all_drugs_sedatives_data = jatos.studySessionData.all_drugs_sedatives;
    let all_drugs_hallucinogens_data =
      jatos.studySessionData.all_drugs_hallucinogens;
    let all_drugs_opioids_data = jatos.studySessionData.all_drugs_opioids;
    let all_drugs_other_data = jatos.studySessionData.all_drugs_other;
    let all_drugs_other_text_data =
      jatos.studySessionData.all_drugs_other_text || "NA";

    //TOBACCO
    let assist2_tobacco_data =
      jatos.studySessionData.assist2_response_tobacco === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_tobacco;
    let assist3_tobacco_data =
      jatos.studySessionData.assist3_response_tobacco === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_tobacco;
    let assist4_tobacco_data =
      jatos.studySessionData.assist4_response_tobacco === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_tobacco;
    let assist5_tobacco_data =
      jatos.studySessionData.assist5_response_tobacco === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_tobacco;
    let assist6_tobacco_data =
      jatos.studySessionData.assist6_response_tobacco === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_tobacco;
    let assist7_tobacco_data =
      jatos.studySessionData.assist7_response_tobacco === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_tobacco;
    //ALCOHOL
    let assist2_alcohol_data =
      jatos.studySessionData.assist2_response_alcohol === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_alcohol;
    let assist3_alcohol_data =
      jatos.studySessionData.assist3_response_alcohol === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_alcohol;
    let assist4_alcohol_data =
      jatos.studySessionData.assist4_response_alcohol === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_alcohol;
    let assist5_alcohol_data =
      jatos.studySessionData.assist5_response_alcohol === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_alcohol;
    let assist6_alcohol_data =
      jatos.studySessionData.assist6_response_alcohol === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_alcohol;
    let assist7_alcohol_data =
      jatos.studySessionData.assist7_response_alcohol === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_alcohol;
    //CANNABIS
    let assist2_cannabis_data =
      jatos.studySessionData.assist2_response_cannabis === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_cannabis;
    let assist3_cannabis_data =
      jatos.studySessionData.assist3_response_cannabis === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_cannabis;
    let assist4_cannabis_data =
      jatos.studySessionData.assist4_response_cannabis === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_cannabis;
    let assist5_cannabis_data =
      jatos.studySessionData.assist5_response_cannabis === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_cannabis;
    let assist6_cannabis_data =
      jatos.studySessionData.assist6_response_cannabis === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_cannabis;
    let assist7_cannabis_data =
      jatos.studySessionData.assist7_response_cannabis === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_cannabis;
    //COCAINE
    let assist2_cocaine_data =
      jatos.studySessionData.assist2_response_cocaine === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_cocaine;
    let assist3_cocaine_data =
      jatos.studySessionData.assist3_response_cocaine === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_cocaine;
    let assist4_cocaine_data =
      jatos.studySessionData.assist4_response_cocaine === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_cocaine;
    let assist5_cocaine_data =
      jatos.studySessionData.assist5_response_cocaine === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_cocaine;
    let assist6_cocaine_data =
      jatos.studySessionData.assist6_response_cocaine === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_cocaine;
    let assist7_cocaine_data =
      jatos.studySessionData.assist7_response_cocaine === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_cocaine;
    //AMPHETAMINE
    let assist2_amphetamine_data =
      jatos.studySessionData.assist2_response_amphetamine === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_amphetamine;
    let assist3_amphetamine_data =
      jatos.studySessionData.assist3_response_amphetamine === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_amphetamine;
    let assist4_amphetamine_data =
      jatos.studySessionData.assist4_response_amphetamine === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_amphetamine;
    let assist5_amphetamine_data =
      jatos.studySessionData.assist5_response_amphetamine === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_amphetamine;
    let assist6_amphetamine_data =
      jatos.studySessionData.assist6_response_amphetamine === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_amphetamine;
    let assist7_amphetamine_data =
      jatos.studySessionData.assist7_response_amphetamine === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_amphetamine;
    //INHALANTS
    let assist2_inhalants_data =
      jatos.studySessionData.assist2_response_inhalants === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_inhalants;
    let assist3_inhalants_data =
      jatos.studySessionData.assist3_response_inhalants === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_inhalants;
    let assist4_inhalants_data =
      jatos.studySessionData.assist4_response_inhalants === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_inhalants;
    let assist5_inhalants_data =
      jatos.studySessionData.assist5_response_inhalants === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_inhalants;
    let assist6_inhalants_data =
      jatos.studySessionData.assist6_response_inhalants === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_inhalants;
    let assist7_inhalants_data =
      jatos.studySessionData.assist7_response_inhalants === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_inhalants;
    //SEDATIVES
    let assist2_sedatives_data =
      jatos.studySessionData.assist2_response_sedatives === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_sedatives;
    let assist3_sedatives_data =
      jatos.studySessionData.assist3_response_sedatives === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_sedatives;
    let assist4_sedatives_data =
      jatos.studySessionData.assist4_response_sedatives === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_sedatives;
    let assist5_sedatives_data =
      jatos.studySessionData.assist5_response_sedatives === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_sedatives;
    let assist6_sedatives_data =
      jatos.studySessionData.assist6_response_sedatives === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_sedatives;
    let assist7_sedatives_data =
      jatos.studySessionData.assist7_response_sedatives === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_sedatives;
    //HALLUCINOGENS
    let assist2_hallucinogens_data =
      jatos.studySessionData.assist2_response_hallucinogens === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_hallucinogens;
    let assist3_hallucinogens_data =
      jatos.studySessionData.assist3_response_hallucinogens === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_hallucinogens;
    let assist4_hallucinogens_data =
      jatos.studySessionData.assist4_response_hallucinogens === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_hallucinogens;
    let assist5_hallucinogens_data =
      jatos.studySessionData.assist5_response_hallucinogens === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_hallucinogens;
    let assist6_hallucinogens_data =
      jatos.studySessionData.assist6_response_hallucinogens === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_hallucinogens;
    let assist7_hallucinogens_data =
      jatos.studySessionData.assist7_response_hallucinogens === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_hallucinogens;
    //OPIOIDS
    let assist2_opioids_data =
      jatos.studySessionData.assist2_response_opioids === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_opioids;
    let assist3_opioids_data =
      jatos.studySessionData.assist3_response_opioids === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_opioids;
    let assist4_opioids_data =
      jatos.studySessionData.assist4_response_opioids === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_opioids;
    let assist5_opioids_data =
      jatos.studySessionData.assist5_response_opioids === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_opioids;
    let assist6_opioids_data =
      jatos.studySessionData.assist6_response_opioids === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_opioids;
    let assist7_opioids_data =
      jatos.studySessionData.assist7_response_opioids === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_opioids;
    //OTHER
    let assist2_specified_drug_data =
      jatos.studySessionData.assist2_response_specified_drug === undefined
        ? "NA"
        : jatos.studySessionData.assist2_response_specified_drug;
    let assist3_specified_drug_data =
      jatos.studySessionData.assist3_response_specified_drug === undefined
        ? "NA"
        : jatos.studySessionData.assist3_response_specified_drug;
    let assist4_specified_drug_data =
      jatos.studySessionData.assist4_response_specified_drug === undefined
        ? "NA"
        : jatos.studySessionData.assist4_response_specified_drug;
    let assist5_specified_drug_data =
      jatos.studySessionData.assist5_response_specified_drug === undefined
        ? "NA"
        : jatos.studySessionData.assist5_response_specified_drug;
    let assist6_specified_drug_data =
      jatos.studySessionData.assist6_response_specified_drug === undefined
        ? "NA"
        : jatos.studySessionData.assist6_response_specified_drug;
    let assist7_specified_drug_data =
      jatos.studySessionData.assist7_response_specified_drug === undefined
        ? "NA"
        : jatos.studySessionData.assist7_response_specified_drug;

    let assist8_data =
      jatos.studySessionData.assist8_response === undefined
        ? "NA"
        : jatos.studySessionData.assist8_response;
    let assist8_followup_data = jatos.studySessionData.assist8_followup || "NA";

    //RISQ Q1
    let risq1_default_data = jatos.studySessionData.risq1_default_response.map(
      (response) => ({
        [`risq1_default_${response.question_no}`]: response.response,
      })
    );
    let risq1_default = Object.assign({}, ...risq1_default_data);
    let risq1_tobacco_data =
      jatos.studySessionData.risq1_tobacco_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_tobacco_response;
    let risq1_alcohol_data =
      jatos.studySessionData.risq1_alcohol_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_alcohol_response;
    let risq1_cannabis_data =
      jatos.studySessionData.risq1_cannabis_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_cannabis_response;
    let risq1_cocaine_data =
      jatos.studySessionData.risq1_cocaine_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_cocaine_response;
    let risq1_amphetamine_data =
      jatos.studySessionData.risq1_amphetamine_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_amphetamine_response;
    let risq1_inhalants_data =
      jatos.studySessionData.risq1_inhalants_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_inhalants_response;
    let risq1_sedatives_data =
      jatos.studySessionData.risq1_sedatives_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_sedatives_response;
    let risq1_hallucinogens_data =
      jatos.studySessionData.risq1_hallucinogens_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_hallucinogens_response;
    let risq1_opioids_data =
      jatos.studySessionData.risq1_opioids_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_opioids_response;
    let risq1_other_data =
      jatos.studySessionData.risq1_other_response === undefined
        ? "NA"
        : jatos.studySessionData.risq1_other_response;

    //RISQ Q2
    let risq2_default_data = jatos.studySessionData.risq2_default_response.map(
      (response) => ({
        [`risq2_default_${response.question_no}`]: response.response,
      })
    );
    let risq2_default = Object.assign({}, ...risq2_default_data);
    let risq2_tobacco_data =
      jatos.studySessionData.risq2_tobacco_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_tobacco_response;
    let risq2_alcohol_data =
      jatos.studySessionData.risq2_alcohol_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_alcohol_response;
    let risq2_cannabis_data =
      jatos.studySessionData.risq2_cannabis_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_cannabis_response;
    let risq2_cocaine_data =
      jatos.studySessionData.risq2_cocaine_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_cocaine_response;
    let risq2_amphetamine_data =
      jatos.studySessionData.risq2_amphetamine_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_amphetamine_response;
    let risq2_inhalants_data =
      jatos.studySessionData.risq2_inhalants_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_inhalants_response;
    let risq2_sedatives_data =
      jatos.studySessionData.risq2_sedatives_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_sedatives_response;
    let risq2_hallucinogens_data =
      jatos.studySessionData.risq2_hallucinogens_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_hallucinogens_response;
    let risq2_opioids_data =
      jatos.studySessionData.risq2_opioids_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_opioids_response;
    let risq2_other_data =
      jatos.studySessionData.risq2_other_response === undefined
        ? "NA"
        : jatos.studySessionData.risq2_other_response;

    //COMBINE DATA
    let combinedData = {
      subj_id: subj_id,
      session_id: session_id,
      task_1_response: task1_response_data,
      task1_text: task1_text_data,
      task_2_response: task2_response_data,
      task2_text: task2_text_data,
      ...strap,
      engagementvideos: engagementvideos_data,
      watch_tiktok: watch_tiktok_data,
      watch_tiktok_text: watch_tiktok_text_data,
      ...check_freq,
      screentime_before: screentime_before_data,
      screentime_after: screentime_after_data,
      screentime_average: screentime_average_data,
      ...bsmas_tiktok,
      ...bsmas_netflix,
      ...bis,
      ...phq,
      ...gad,
      ...cius,
      ...catch_responses,
      ...catch_responses_2,
      ...catch_responses_3,
      all_drugs_tobacco: all_drugs_tobacco_data,
      all_drugs_alcohol: all_drugs_alcohol_data,
      all_drugs_cannabis: all_drugs_cannabis_data,
      all_drugs_cocaine: all_drugs_cocaine_data,
      all_drugs_amphetamine: all_drugs_amphetamine_data,
      all_drugs_inhalants: all_drugs_inhalants_data,
      all_drugs_sedatives: all_drugs_sedatives_data,
      all_drugs_hallucinogens: all_drugs_hallucinogens_data,
      all_drugs_opioids: all_drugs_opioids_data,
      all_drugs_other: all_drugs_other_data,
      all_drugs_other_text: all_drugs_other_text_data,

      //TOBACCO
      assist_2_tobacco: assist2_tobacco_data,
      assist_3_tobacco: assist3_tobacco_data,
      assist_4_tobacco: assist4_tobacco_data,
      assist_5_tobacco: assist5_tobacco_data,
      assist_6_tobacco: assist6_tobacco_data,
      assist_7_tobacco: assist7_tobacco_data,
      //ALCOHOL
      assist_2_alcohol: assist2_alcohol_data,
      assist_3_alcohol: assist3_alcohol_data,
      assist_4_alcohol: assist4_alcohol_data,
      assist_5_alcohol: assist5_alcohol_data,
      assist_6_alcohol: assist6_alcohol_data,
      assist_7_alcohol: assist7_alcohol_data,
      //CANNABIS
      assist_2_cannabis: assist2_cannabis_data,
      assist_3_cannabis: assist3_cannabis_data,
      assist_4_cannabis: assist4_cannabis_data,
      assist_5_cannabis: assist5_cannabis_data,
      assist_6_cannabis: assist6_cannabis_data,
      assist_7_cannabis: assist7_cannabis_data,
      //COCAINE
      assist_2_cocaine: assist2_cocaine_data,
      assist_3_cocaine: assist3_cocaine_data,
      assist_4_cocaine: assist4_cocaine_data,
      assist_5_cocaine: assist5_cocaine_data,
      assist_6_cocaine: assist6_cocaine_data,
      assist_7_cocaine: assist7_cocaine_data,
      //AMPHETAMINE
      assist_2_amphetamine: assist2_amphetamine_data,
      assist_3_amphetamine: assist3_amphetamine_data,
      assist_4_amphetamine: assist4_amphetamine_data,
      assist_5_amphetamine: assist5_amphetamine_data,
      assist_6_amphetamine: assist6_amphetamine_data,
      assist_7_amphetamine: assist7_amphetamine_data,
      //INHALANTS
      assist_2_inhalants: assist2_inhalants_data,
      assist_3_inhalants: assist3_inhalants_data,
      assist_4_inhalants: assist4_inhalants_data,
      assist_5_inhalants: assist5_inhalants_data,
      assist_6_inhalants: assist6_inhalants_data,
      assist_7_inhalants: assist7_inhalants_data,
      //SEDATIVES
      assist_2_sedatives: assist2_sedatives_data,
      assist_3_sedatives: assist3_sedatives_data,
      assist_4_sedatives: assist4_sedatives_data,
      assist_5_sedatives: assist5_sedatives_data,
      assist_6_sedatives: assist6_sedatives_data,
      assist_7_sedatives: assist7_sedatives_data,
      //HALLUCINOGENS
      assist_2_hallucinogens: assist2_hallucinogens_data,
      assist_3_hallucinogens: assist3_hallucinogens_data,
      assist_4_hallucinogens: assist4_hallucinogens_data,
      assist_5_hallucinogens: assist5_hallucinogens_data,
      assist_6_hallucinogens: assist6_hallucinogens_data,
      assist_7_hallucinogens: assist7_hallucinogens_data,
      //OPIOIDS
      assist_2_opioids: assist2_opioids_data,
      assist_3_opioids: assist3_opioids_data,
      assist_4_opioids: assist4_opioids_data,
      assist_5_opioids: assist5_opioids_data,
      assist_6_opioids: assist6_opioids_data,
      assist_7_opioids: assist7_opioids_data,
      //OTHER
      assist_2_other: assist2_specified_drug_data,
      assist_3_other: assist3_specified_drug_data,
      assist_4_other: assist4_specified_drug_data,
      assist_5_other: assist5_specified_drug_data,
      assist_6_other: assist6_specified_drug_data,
      assist_7_other: assist7_specified_drug_data,

      assist_8: assist8_data,
      assist_8_followup: assist8_followup_data,

      //RISQ Q1
      ...risq1_default,
      risq1_tobacco: risq1_tobacco_data,
      risq1_alcohol: risq1_alcohol_data,
      risq1_cannabis: risq1_cannabis_data,
      risq1_cocaine: risq1_cocaine_data,
      risq1_amphetamine: risq1_amphetamine_data,
      risq1_inhalants: risq1_inhalants_data,
      risq1_sedatives: risq1_sedatives_data,
      risq1_hallucinogens: risq1_hallucinogens_data,
      risq1_opioids: risq1_opioids_data,
      risq1_other: risq1_other_data,

      //RISQ Q2
      ...risq2_default,
      risq2_tobacco: risq2_tobacco_data,
      risq2_alcohol: risq2_alcohol_data,
      risq2_cannabis: risq2_cannabis_data,
      risq2_cocaine: risq2_cocaine_data,
      risq2_amphetamine: risq2_amphetamine_data,
      risq2_inhalants: risq2_inhalants_data,
      risq2_sedatives: risq2_sedatives_data,
      risq2_hallucinogens: risq2_hallucinogens_data,
      risq2_opioids: risq2_opioids_data,
      risq2_other: risq2_other_data,
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
      },
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
      },
    },
  ],
};

let task = {
  timeline: [task_questions_instructions, task_questions_1, task_questions_2],
};

//TIKTOK USAGE
let usage_instructions = {
  type: jsPsychSurveyHtmlForm,
  html:
    '<p style="font-size:1.25em"><em>Please follow the instructions below, record the required data, and confirm using the tick box underneath the document to continue with the remainder of the experiment.</em></p>' +
    "<div>" +
    '<object data="files/tiktok_instructions.pdf" type="application/pdf" style="width:80vw;height:70vh"></object>' +
    "</div>" +
    '<p style="font-size:1.25em">' +
    '<input type="checkbox" id="tiktok_instructions" name="tiktok_instructions" value="tick" required>' +
    '<label style="margin-left:0.5em" for="consent">I confirm that I have read the instructions and have recorded the relevant information.</label>' +
    "</p>",
  button_label: "Continue",
  checkbox_required: true,
  list_questions: true,
  required_message: "Please tick this box to proceed with the experiment.",
};

let screentime_before = {
  type: jsPsychSurveyHtmlForm,
  html: `
      <div style="text-align: center; font-size: 1.25em;">
          <p>How much time did you spend watching TikTok so far <strong>today</strong>?</p>
          <label for="hours">Hours:</label>
          <input type="number" id="hours" name="tiktok_hours" style="width: 75px; height: 25px" min="0" max="23" required>
          <label for="minutes">Minutes:</label>
          <input type="number" id="minutes" name="tiktok_minutes" style="width: 75px; height: 25px" min="0" max ="59" required>
      </div>
       <div style="height: 1.25em;"></div>
  `,
  on_finish: function (data) {
    const responses = data.response;
    const hours = parseInt(responses.tiktok_hours) || 0;
    const minutes = parseInt(responses.tiktok_minutes) || 0;

    const totalMinutes = hours * 60 + minutes;

    data.totalMinutes = totalMinutes;
    jatos.studySessionData.screentime_before = totalMinutes;
  },
};

let screentime_average = {
  type: jsPsychSurveyHtmlForm,
  html: `
      <div style="text-align: center; font-size: 1.25em;">
          <p>How much time did you spend watching TikTok on <strong>average this week</strong>?</p>
          <label for="hours">Hours:</label>
          <input type="number" id="hours" name="tiktok_hours" style="width: 75px; height: 25px" min="0" max="23" required>
          <label for="minutes">Minutes:</label>
          <input type="number" id="minutes" name="tiktok_minutes" style="width: 75px; height: 25px" min="0" max ="59" required>
      </div>
       <div style="height: 1.25em;"></div>
  `,
  on_finish: function (data) {
    const responses = data.response;
    const hours = parseInt(responses.tiktok_hours) || 0;
    const minutes = parseInt(responses.tiktok_minutes) || 0;

    const totalMinutes = hours * 60 + minutes;

    data.totalMinutes = totalMinutes;
    jatos.studySessionData.screentime_average = totalMinutes;
  },
};

let tiktok_instructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
    '<div style="text-align:center; max-width: 1440px; margin: 0 auto;">' +
    '<p style="font-size:1.5em;line-:1.5;"><b>Please let the experimenter know that you have completed the game.</b></p>' +
    '<p style="font-size:1.5em;line-:1.5;">You will be asked to use TikTok or read magazines depending on the amount of points you accumulated.</p>' +
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

let tiktok = {
  timeline: [
    usage_instructions,
    screentime_average,
    screentime_before,
    tiktok_instructions,
  ],
};

//TIKTOK TASK
let tiktok_usage = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px">' +
    "<p><b>Please use TikTok as you normally would.</b></p>" +
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
        '<p style="color: black; padding: 20px;">Please answer the questions with respect to how you feel while watching TikTok now.</p>',
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
        const endColor = "#FAA0A0";
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
        jatos.studySessionData.flattened_strap[
          `strap_${jsPsych.timelineVariable("survey_question_no")}`
        ] = data.strap_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How pleasant is watching TikTok right now?</b>",
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

let tiktok_usage_2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px">' +
    "<p><b>Please continue to use TikTok.</b></p>" +
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
        '<p style="color: black; padding: 20px;">Please answer the questions with respect to how you feel while watching TikTok now.</p>',
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
        const endColor = "#FAA0A0";
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
        jatos.studySessionData.flattened_strap[
          `strap_${jsPsych.timelineVariable("survey_question_no")}`
        ] = data.strap_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How pleasant is watching TikTok right now?</b>",
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

let tiktok_usage_3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px">' +
    "<p><b>Please continue to use TikTok.</b></p>" +
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
        '<p style="color: black; padding: 20px;">Please answer the questions with respect to how you feel while watching TikTok now.</p>',
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
        const endColor = "#FAA0A0";
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
        jatos.studySessionData.flattened_strap[
          `strap_${jsPsych.timelineVariable("survey_question_no")}`
        ] = data.strap_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How pleasant is watching TikTok right now?</b>",
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

let tiktok_end = {
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

let tiktok_task = {
  timeline: [
    tiktok_usage,
    strap_1,
    tiktok_usage_2,
    strap_2,
    tiktok_usage_3,
    strap_3,
    tiktok_end,
  ],
};

//ENGAGEMENT QUESTIONS
let engagement_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.5em;line-height:1.5;max-width:1440px;">' +
    "<p>Now we will ask you a few questions regarding your TikTok use during this experiment.</p>" +
    "</div>",
  choices: ["Continue"],
  on_load: function () {
    document.body.style.backgroundColor = "#FFFFFF";
  },
};

let history_instructions = {
  type: jsPsychSurveyHtmlForm,
  html:
    '<p style="font-size:1.25em"><em>Please read through the document about how to check your watch history, tick the box underneath the document (at the bottom of the webpage) to confirm you have read it' +
    ", and then press Next to continue.</em></p>" +
    "<div>" +
    '<object data="files/engagement_instructions.pdf" type="application/pdf" style="width:80vw;height:70vh"></object>' +
    "</div>" +
    '<p style="font-size:1.25em">' +
    '<input type="checkbox" id="engagement_instructions" name="engagement_instructions" value="tick" required>' +
    '<label style="margin-left:0.5em" for="consent">I confirm that I have recorded the relevant information in this period.</label>' +
    "</p>",
  button_label: "Continue",
  checkbox_required: true,
  list_questions: true,
  required_message: "Please tick this box to proceed with the experiment.",
};

let videos = {
  type: jsPsychSurveyHtmlForm,
  html: '<p><label style="font-size:1.5em;margin-right:1.5em" for="number_videos">How many videos did you watch in this interval?</label> <input style="text-align:left;padding:5px" type="number" id="number" name="number_videos" min="1" max="300" required></p>',
  on_finish: function (data) {
    let videos_str = data.response.number_videos;
    data.number_videos = parseInt(videos_str);
    jatos.studySessionData.number_videos = parseInt(videos_str);
  },
};

let watch_time = {
  timeline: [
    {
      type: jsPsychSurveyHtmlForm,
      html: `
          <div style="text-align:center;">
            <p style="font-size:1.5em; line-height:1.5; margin-bottom: 1em;">Did you use TikTok for the entire duration of the waiting period?</p>
            <div style="display: inline-flex; flex-direction: column; align-items: start; font-size: 1.5em;">
              <label style="margin-bottom: 0.5em;">
                <input type="radio" id="tiktok_yes" name="tiktok" value="tiktok_yes" required style="margin-right: 1em;">
                <span style="margin-left: 0.5em;">Yes, I did.</span>
              </label>
  
              <label style="margin-bottom: 1em;">
                <input type="radio" id="tiktok_no" name="tiktok" value="tiktok_no" style="margin-right: 1em;">
                <span style="margin-left: 0.5em;">No, I did not (please specify)</span>
                <input style="margin-left: 1em; width: 250px;" type="text" id="tiktok_text" name="tiktok_text" required disabled/>
              </label>
            </div>
          </div>
        `,
      dataAsArray: true,
      other_text_required: true,
      text_checkbox_pairs: [
        {
          checkbox_id: "tiktok_no",
          text_id: "tiktok_text",
          required_message: "Please specify how",
        },
      ],
      data: { questionnaire: "TIKTOK", question_no: "2" },
      on_load: function () {
        const yesRadio = document.getElementById("tiktok_yes");
        const noRadio = document.getElementById("tiktok_no");
        const textBox = document.getElementById("tiktok_text");

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
          if (item.name === "tiktok") {
            flattenedResponse.watch_engagement = item.value;
          } else if (item.name === "tiktok_text") {
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

let screentime_after = {
  type: jsPsychSurveyHtmlForm,
  html: function () {
    const screentimeBeforeMinutes =
      jatos.studySessionData.screentime_before || 0;
    const screentimeBeforeHours = Math.floor(screentimeBeforeMinutes / 60);

    return `
      <div style="text-align: center; font-size: 25px;">
          <p>After the session, what is your screen time on TikTok now?</p>
          <label for="hours">Hours:</label>
          <input type="number" id="hours" name="tiktok_hours" style="width: 75px; height: 25px" min="${screentimeBeforeHours}" max="23" required>
          <label for="minutes">Minutes:</label>
          <input type="number" id="minutes" name="tiktok_minutes" style="width: 75px; height: 25px" min="0" max="59" required>
      </div>
      <div style="height: 25px;"></div>
    `;
  },
  on_finish: function (data) {
    const responses = data.response;
    const hours = parseInt(responses.tiktok_hours) || 0;
    const minutes = parseInt(responses.tiktok_minutes) || 0;

    const totalMinutes = hours * 60 + minutes;

    data.totalMinutes = totalMinutes;
    jatos.studySessionData.screentime_after = totalMinutes;
  },
};

let engagement = {
  timeline: [
    engagement_instructions,
    history_instructions,
    watch_time,
    screentime_after,
    videos,
  ],
};

//BSMAS
let bsmas_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;max-width:1200px;">' +
    "<p><b>You will now be asked a series of questions pertaining to your general TikTok and Netflix use. Please select the response that reflects how you feel best.</b></p>" +
    "</div>",
  choices: ["Continue"],
};

let bsmas_choices = [
  "<p>Very rarely</p>",
  "<p>Rarely</p>",
  "<p>Sometimes</p>",
  "<p>Often</p>",
  "<p>Very often</p>",
];

let bsmas_tiktok_questions = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the last year, have you...</em>",
      data: {
        reversed_scoring: jsPsych.timelineVariable("reversed"),
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let bsmas_tiktok_response = parseInt(Object.values(responseObj)[0]);

        let reversed = jsPsych.data.get().last(1).values()[0].reversed_scoring;
        data.bsmas_tiktok_response_raw = bsmas_tiktok_response;

        if (reversed) {
          data.bsmas_tiktok_response = 5 - bsmas_tiktok_response;
        } else {
          data.bsmas_tiktok_response = bsmas_tiktok_response + 1;
        }

        if (!jatos.studySessionData.bsmas_tiktok_responses) {
          jatos.studySessionData.bsmas_tiktok_responses = [];
        }

        jatos.studySessionData.bsmas_tiktok_responses.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.bsmas_tiktok_response,
        });
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Spent a lot of time thinking about TikTok or planned use of TikTok?</b>",
        labels: bsmas_choices,
        name: "bsmas_salience",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_TIKTOK",
      subscale: "Salience",
      survey_question_no: 1,
    },
    {
      question: {
        prompt: "<b>Felt an urge to use TikTok more and more?</b>",
        labels: bsmas_choices,
        name: "bsmas_tolerance",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_TIKTOK",
      subscale: "Tolerance",
      survey_question_no: 2,
    },
    {
      question: {
        prompt: "<b>Used TikTok to forget about personal problems?</b>",
        labels: bsmas_choices,
        name: "bsmas_mood",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_TIKTOK",
      subscale: "Mood Modification",
      survey_question_no: 3,
    },
    {
      question: {
        prompt:
          "<b>Tried to cut down on the use of TikTok without success?</b>",
        labels: bsmas_choices,
        name: "bsmas_relapse",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_TIKTOK",
      subscale: "Relapse",
      survey_question_no: 4,
    },
    {
      question: {
        prompt:
          "<b>Become restless or troubled if you have been prohibited from using TikTok?</b>",
        labels: bsmas_choices,
        name: "bsmas_withdrawal",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_TIKTOK",
      subscale: "Withdrawal",
      survey_question_no: 5,
    },
    {
      question: {
        prompt:
          "<b>Used TikTok so much that it has had a negative impact on your job/studies?</b>",
        labels: bsmas_choices,
        name: "bsmas_conflict",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_TIKTOK",
      subscale: "Conflict",
      survey_question_no: 6,
    },
  ],
};

let bsmas_netflix_questions = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the last year, have you...</em>",
      data: {
        reversed_scoring: jsPsych.timelineVariable("reversed"),
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let bsmas_netflix_response = parseInt(Object.values(responseObj)[0]);

        let reversed = jsPsych.data.get().last(1).values()[0].reversed_scoring;
        data.bsmas_netflix_response_raw = bsmas_netflix_response;

        if (reversed) {
          data.bsmas_netflix_response = 5 - bsmas_netflix_response;
        } else {
          data.bsmas_netflix_response = bsmas_netflix_response + 1;
        }

        if (!jatos.studySessionData.bsmas_netflix_responses) {
          jatos.studySessionData.bsmas_netflix_responses = [];
        }

        jatos.studySessionData.bsmas_netflix_responses.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.bsmas_netflix_response,
        });
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Spent a lot of time thinking about Netflix or planned use of Netflix?</b>",
        labels: bsmas_choices,
        name: "bsmas_salience",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_NETFLIX",
      subscale: "Salience",
      survey_question_no: 1,
    },
    {
      question: {
        prompt: "<b>Felt an urge to use Netflix more and more?</b>",
        labels: bsmas_choices,
        name: "bsmas_tolerance",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_NETFLIX",
      subscale: "Tolerance",
      survey_question_no: 2,
    },
    {
      question: {
        prompt: "<b>Used Netflix to forget about personal problems?</b>",
        labels: bsmas_choices,
        name: "bsmas_mood",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_NETFLIX",
      subscale: "Mood Modification",
      survey_question_no: 3,
    },
    {
      question: {
        prompt:
          "<b>Tried to cut down on the use of Netflix without success?</b>",
        labels: bsmas_choices,
        name: "bsmas_relapse",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_NETFLIX",
      subscale: "Relapse",
      survey_question_no: 4,
    },
    {
      question: {
        prompt:
          "<b>Become restless or troubled if you have been prohibited from using Netflix?</b>",
        labels: bsmas_choices,
        name: "bsmas_withdrawal",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_NETFLIX",
      subscale: "Withdrawal",
      survey_question_no: 5,
    },
    {
      question: {
        prompt:
          "<b>Used Netflix so much that it has had a negative impact on your job/studies?</b>",
        labels: bsmas_choices,
        name: "bsmas_conflict",
        required: true,
      },
      reversed: false,
      questionnaire: "BSMAS_NETFLIX",
      subscale: "Conflict",
      survey_question_no: 6,
    },
  ],
};

let bsmas = {
  timeline: [
    bsmas_instructions,
    bsmas_tiktok_questions,
    bsmas_netflix_questions,
  ],
};

//BIS-11
let bis_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;max-width:1200px;">' +
    "<p>People differ in the ways they act and think in different situations. This is a test to measure some of the ways in which you act and think. Read each statement and select the appropriate circle that matches how you think.</p>" +
    "</div>",
  choices: ["Continue"],
};

let bis_choices = [
  "<p>Rarely/Never</p>",
  "<p>Occasionally</p>",
  "<p>Often</p>",
  "<p>Almost always/Always</p>",
];

let bis_questions = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble:
        "<em>Do not spend too much time on any statement. Answer quickly and honestly.</em>",
      data: {
        reversed_scoring: jsPsych.timelineVariable("reversed"),
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let bis_response = parseInt(Object.values(responseObj)[0]);
      
        let reversed = jsPsych.data.get().last(1).values()[0].reversed_scoring;
        data.bis_response_raw = bis_response;
      
        if (reversed) {
          data.bis_response = 4 - bis_response;
        } else {
          data.bis_response = bis_response + 1;
        }
      
        if (!jatos.studySessionData.bis_responses) {
          jatos.studySessionData.bis_responses = [];
        }
      
        if (!jatos.studySessionData.flattened_bis_responses) {
          jatos.studySessionData.flattened_bis_responses = {};
        }
            
        const key = `${data.questionnaire}_${data.question_no}`;

        jatos.studySessionData.bis_responses.push({
          question: data.questionnaire,
          question_no: data.question_no,
          response: data.bis_response,
        });
      
        jatos.studySessionData.flattened_bis_responses[key] = data.bis_response;
      },      
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>I plan tasks carefully.</b>",
        labels: bis_choices,
        name: "bis_one",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 1,
    },
    {
      question: {
        prompt: "<b>I do things without thinking.</b>",
        labels: bis_choices,
        name: "bis_two",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 2,
    },
    {
      question: {
        prompt: "<b>I make up my mind quickly.</b>",
        labels: bis_choices,
        name: "bis_three",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 3,
    },
    {
      question: {
        prompt: "<b>I am happy-go-lucky.</b>",
        labels: bis_choices,
        name: "bis_four",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 4,
    },
    {
      question: {
        prompt: '<b>I don&apos;t "pay attention".</b>',
        labels: bis_choices,
        name: "bis_five",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 5,
    },
    {
      question: {
        prompt: '<b>I have "racing" thoughts.</b>',
        labels: bis_choices,
        name: "bis_six",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 6,
    },
    {
      question: {
        prompt: "<b>I plan trips well ahead of time.</b>",
        labels: bis_choices,
        name: "bis_seven",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 7,
    },
    {
      question: {
        prompt: "<b>I am self controlled.</b>",
        labels: bis_choices,
        name: "bis_eight",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 8,
    },
    {
      question: {
        prompt: "<b>I concentrate easily.</b>",
        labels: bis_choices,
        name: "bis_nine",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 9,
    },
    {
      question: {
        prompt: "<b>I save regularly.</b>",
        labels: bis_choices,
        name: "bis_ten",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 10,
    },
    {
      question: {
        prompt: '<b>I "squirm" at plays or lectures.</b>',
        labels: bis_choices,
        name: "bis_eleven",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 11,
    },
    {
      question: {
        prompt: "<b>I can survive without air for a week.</b>",
        labels: bis_choices,
        name: "catch_question",
        required: true,
      },
      reversed: false,
      questionnaire: "CATCH_QUESTIONS",
      subscale: "Catch Question",
      survey_question_no: 1,
    },
    {
      question: {
        prompt: "<b>I am a careful thinker.</b>",
        labels: bis_choices,
        name: "bis_twelve",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 12,
    },
    {
      question: {
        prompt: "<b>I plan for job security.</b>",
        labels: bis_choices,
        name: "bis_thirteen",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 13,
    },
    {
      question: {
        prompt: "<b>I say things without thinking.</b>",
        labels: bis_choices,
        name: "bis_fourteen",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 14,
    },
    {
      question: {
        prompt: "<b>I like to think about complex problems.</b>",
        labels: bis_choices,
        name: "bis_fifteen",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 15,
    },
    {
      question: {
        prompt: "<b>I change jobs.</b>",
        labels: bis_choices,
        name: "bis_sixteen",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 16,
    },
    {
      question: {
        prompt: '<b>I act "on impulse".</b>',
        labels: bis_choices,
        name: "bis_seventeen",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 17,
    },
    {
      question: {
        prompt: "<b>I get easily bored when solving thought problems.</b>",
        labels: bis_choices,
        name: "bis_eighteen",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 18,
    },
    {
      question: {
        prompt: "<b>I act on the spur of the moment.</b>",
        labels: bis_choices,
        name: "bis_nineteen",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 19,
    },
    {
      question: {
        prompt: "<b>I am a steady thinker.</b>",
        labels: bis_choices,
        name: "bis_twenty",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 20,
    },
    {
      question: {
        prompt: "<b>I change residences.</b>",
        labels: bis_choices,
        name: "bis_twentyone",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 21,
    },
    {
      question: {
        prompt: "<b>I buy things on impulse.</b>",
        labels: bis_choices,
        name: "bis_twentytwo",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 22,
    },
    {
      question: {
        prompt:
          "<b>I can travel through solid walls without any difficulty.</b>",
        labels: bis_choices,
        name: "catch_question",
        required: true,
      },
      reversed: false,
      questionnaire: "CATCH_QUESTIONS",
      subscale: "Catch Question",
      survey_question_no: 2,
    },
    {
      question: {
        prompt: "<b>I can only think about one thing at a time.</b>",
        labels: bis_choices,
        name: "bis_twentythree",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 23,
    },
    {
      question: {
        prompt: "<b>I change hobbies.</b>",
        labels: bis_choices,
        name: "bis_twentyfour",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 24,
    },
    {
      question: {
        prompt: "<b>I spend or charge more than I earn.</b>",
        labels: bis_choices,
        name: "bis_twentyfive",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 25,
    },
    {
      question: {
        prompt: "<b>I often have extraneous thoughts when thinking.</b>",
        labels: bis_choices,
        name: "bis_twentysix",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 26,
    },
    {
      question: {
        prompt: "<b>I am more interested in the present than the future.</b>",
        labels: bis_choices,
        name: "bis_twentyseven",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 27,
    },
    {
      question: {
        prompt: "<b>I am restless at the theater or lectures.</b>",
        labels: bis_choices,
        name: "bis_twentyeight",
        required: true,
      },
      reversed: false,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 28,
    },
    {
      question: {
        prompt: "<b>I like puzzles.</b>",
        labels: bis_choices,
        name: "bis_twentynine",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 29,
    },
    {
      question: {
        prompt: "<b>I am future oriented.</b>",
        labels: bis_choices,
        name: "bis_thirty",
        required: true,
      },
      reversed: true,
      questionnaire: "BIS-11",
      subscale: "Impulsiveness",
      survey_question_no: 30,
    },
  ],
};

let bis = {
  timeline: [bis_instructions, bis_questions],
};

//PHQ-9
let phq_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;max-width:1200px;">' +
    "<p><b>You will now be asked a series of questions about symptoms, and how often they  have been bothering you over the <em>past 2 weeks</em>. Please select the response that reflects how you feel best.</b></p>" +
    "</div>",
  choices: ["Continue"],
};

let phq_choices = [
  "<p>Not at all</p>",
  "<p>Several days</p>",
  "<p>More than half the days</p>",
  "<p>Nearly every day</p>",
];

let phq_questions = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble:
        "<em style='font-size:1.25'>Over the last 2 weeks, how often have you been bothered by the following problem?</em>",
      data: {
        reversed_scoring: jsPsych.timelineVariable("reversed"),
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let phq_response = parseInt(Object.values(responseObj)[0]);
      
        let reversed = jsPsych.data.get().last(1).values()[0].reversed_scoring;
        data.phq_response_raw = phq_response;
      
        if (reversed) {
          data.phq_response = 3 - phq_response;
        } else {
          data.phq_response = phq_response;
        }
      
        if (!jatos.studySessionData.phq_responses) {
          jatos.studySessionData.phq_responses = [];
        }
      
        if (!jatos.studySessionData.flattened_phq_responses) {
          jatos.studySessionData.flattened_phq_responses = {};
        }
        
        const key = `${data.questionnaire}_${data.question_no}`;
      
        jatos.studySessionData.phq_responses.push({
          question: data.questionnaire,
          question_no: data.question_no,
          response: data.phq_response,
        });
      
        jatos.studySessionData.flattened_phq_responses[key] = data.phq_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>Little interest or pleasure in doing things.</b>",
        labels: phq_choices,
        name: "phq_one",
        required: true,
      },
      reversed: false,
      questionnaire: "PHQ",
      subscale: "Health",
      survey_question_no: 1,
    },
    {
      question: {
        prompt: "<b>Feeling down, depressed, or hopeless.</b>",
        labels: phq_choices,
        name: "phq_two",
        required: true,
      },
      reversed: false,
      questionnaire: "PHQ",
      subscale: "Health",
      survey_question_no: 2,
    },
    {
      question: {
        prompt:
          "<b>Trouble falling or staying asleep, or sleeping too much.</b>",
        labels: phq_choices,
        name: "phq_three",
        required: true,
      },
      reversed: false,
      questionnaire: "PHQ",
      subscale: "Health",
      survey_question_no: 3,
    },
    {
      question: {
        prompt: "<b>Feeling tired or having little energy.</b>",
        labels: phq_choices,
        name: "phq_four",
        required: true,
      },
      reversed: false,
      questionnaire: "PHQ",
      subscale: "Health",
      survey_question_no: 4,
    },
    {
      question: {
        prompt: "<b>Poor appetite or overeating.</b>",
        labels: phq_choices,
        name: "phq_five",
        required: true,
      },
      reversed: false,
      questionnaire: "PHQ",
      subscale: "Health",
      survey_question_no: 5,
    },
    {
      question: {
        prompt:
          "<b>Please select 'nearly every day' in response to this question.</b>",
        labels: phq_choices,
        name: "catch_question",
        required: true,
      },
      reversed: false,
      questionnaire: "CATCH_QUESTIONS",
      subscale: "Catch Question",
      survey_question_no: 3,
    },
    {
      question: {
        prompt:
          "<b>Feeling bad about yourself or that you are a failure or have let yourself or your family down.</b>",
        labels: phq_choices,
        name: "phq_six",
        required: true,
      },
      reversed: false,
      questionnaire: "PHQ",
      subscale: "Health",
      survey_question_no: 6,
    },
    {
      question: {
        prompt:
          "<b>Trouble concentrating on things, such as reading the newspaper or watching television.</b>",
        labels: phq_choices,
        name: "phq_seven",
        required: true,
      },
      reversed: false,
      questionnaire: "PHQ",
      subscale: "Health",
      survey_question_no: 7,
    },
    {
      question: {
        prompt:
          "<b>Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual.</b>",
        labels: phq_choices,
        name: "phq_eight",
        required: true,
      },
      reversed: false,
      questionnaire: "PHQ",
      subscale: "Health",
      survey_question_no: 8,
    },
  ],
};

let phq = {
  timeline: [phq_instructions, phq_questions],
};

//GAD-7
let gad_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;max-width:1200px;">' +
    "<p>You will now be asked a series of questions about symptoms, and how often they  have been bothering you over the <b>past 2 weeks</b>. Please select the response that reflects how you feel best.</p>" +
    "</div>",
  choices: ["Continue"],
};

let gad_choices = [
  "<p>Not at all</p>",
  "<p>Several days</p>",
  "<p>More than half the days</p>",
  "<p>Nearly every day</p>",
];

let gad_questions = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble:
        "<em style='font-size:1.25'>Over the last 2 weeks, how often have you been bothered by the following problem?</em>",
      data: {
        reversed_scoring: jsPsych.timelineVariable("reversed"),
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let gad_response = parseInt(Object.values(responseObj)[0]);

        let reversed = jsPsych.data.get().last(1).values()[0].reversed_scoring;
        data.gad_response_raw = gad_response;

        if (reversed) {
          data.gad_response = 3 - gad_response;
        } else {
          data.gad_response = gad_response;
        }

        if (!jatos.studySessionData.gad_responses) {
          jatos.studySessionData.gad_responses = [];
        }

        jatos.studySessionData.gad_responses.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.gad_response,
        });

        if (!jatos.studySessionData.flattened_gad_responses) {
          jatos.studySessionData.flattened_gad_responses = {};
        }

        const key = `${jsPsych
          .timelineVariable("questionnaire")
          .toLowerCase()
          .replace(/\s+/g, "_")}_${jsPsych.timelineVariable(
          "survey_question_no"
        )}`;
        jatos.studySessionData.flattened_gad_responses[key] = data.gad_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>Feeling nervous, anxious, or on edge.</b>",
        labels: gad_choices,
        name: "gad_one",
        required: true,
      },
      reversed: false,
      questionnaire: "GAD",
      subscale: "Health",
      survey_question_no: 1,
    },
    {
      question: {
        prompt: "<b>Not being able to stop or control worrying.</b>",
        labels: gad_choices,
        name: "gad_two",
        required: true,
      },
      reversed: false,
      questionnaire: "GAD",
      subscale: "Health",
      survey_question_no: 2,
    },
    {
      question: {
        prompt: "<b>Worrying too much about different things.</b>",
        labels: gad_choices,
        name: "gad_three",
        required: true,
      },
      reversed: false,
      questionnaire: "GAD",
      subscale: "Health",
      survey_question_no: 3,
    },
    {
      question: {
        prompt: "<b>Trouble relaxing.</b>",
        labels: gad_choices,
        name: "gad_four",
        required: true,
      },
      reversed: false,
      questionnaire: "GAD",
      subscale: "Health",
      survey_question_no: 4,
    },
    {
      question: {
        prompt: "<b>Being so restless that it is hard to sit still.</b>",
        labels: gad_choices,
        name: "gad_five",
        required: true,
      },
      reversed: false,
      questionnaire: "GAD",
      subscale: "Health",
      survey_question_no: 5,
    },
    {
      question: {
        prompt: "<b>Becoming easily annoyed or irritable.</b>",
        labels: gad_choices,
        name: "gad_six",
        required: true,
      },
      reversed: false,
      questionnaire: "GAD",
      subscale: "Health",
      survey_question_no: 6,
    },
    {
      question: {
        prompt: "<b>Feeling afraid as if something awful might happen.</b>",
        labels: gad_choices,
        name: "gad_seven",
        required: true,
      },
      reversed: false,
      questionnaire: "GAD",
      subscale: "Health",
      survey_question_no: 7,
    },
  ],
};

let gad = {
  timeline: [gad_instructions, gad_questions],
};

//CIUS
let cius_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;max-width:1200px;">' +
    "<p>The following questions should be answered about your use of TikTok.</p>" +
    "</div>",
  choices: ["Continue"],
};

let cius_choices = [
  "<p>Never</p>",
  "<p>Seldom</p>",
  "<p>Sometimes</p>",
  "<p>Often</p>",
  "<p>Very often</p>",
];

let cius_questions = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>How often...</em>",
      data: {
        reversed_scoring: jsPsych.timelineVariable("reversed"),
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cius_response = parseInt(Object.values(responseObj)[0]);

        let reversed = jsPsych.data.get().last(1).values()[0].reversed_scoring;
        data.cius_response_raw = cius_response;

        if (reversed) {
          data.cius_response = 4 - cius_response;
        } else {
          data.cius_response = cius_response;
        }

        if (!jatos.studySessionData.cius_responses) {
          jatos.studySessionData.cius_responses = [];
        }

        if (!jatos.studySessionData.flattened_cius_responses) {
          jatos.studySessionData.flattened_cius_responses = {};
        }

        const key = `${data.questionnaire}_${data.question_no}`;

        jatos.studySessionData.cius_responses.push({
          question: data.questionnaire,
          question_no: data.question_no,
          response: data.cius_response,
        });

        jatos.studySessionData.flattened_cius_responses[key] = data.cius_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Do you find it difficult to stop using TikTok when you are online?</b>",
        labels: cius_choices,
        name: "cius_one",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 1,
    },
    {
      question: {
        prompt:
          "<b>Do you continue to use TikTok despite your intention to stop?</b>",
        labels: cius_choices,
        name: "cius_two",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 2,
    },
    {
      question: {
        prompt:
          "<b>Do others (e.g., partner, children, parents) say you should use TikTok less?</b>",
        labels: cius_choices,
        name: "cius_three",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 3,
    },
    {
      question: {
        prompt:
          "<b>Do you prefer to use TikTok instead of spending time with others (e.g., partner, children, parents)?</b>",
        labels: cius_choices,
        name: "cius_four",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 4,
    },
    {
      question: {
        prompt: "<b>Are you short of sleep because of TikTok?</b>",
        labels: cius_choices,
        name: "cius_five",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 5,
    },
    {
      question: {
        prompt: "<b>Do you think about TikTok, even when not online?</b>",
        labels: cius_choices,
        name: "cius_six",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 6,
    },
    {
      question: {
        prompt: "<b>Do you look forward to your next TikTok session?</b>",
        labels: cius_choices,
        name: "cius_seven",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 7,
    },
    {
      question: {
        prompt:
          "<b>Please select 'sometimes' in response to this question.</b>",
        labels: cius_choices,
        name: "catch_question",
        required: true,
      },
      reversed: false,
      questionnaire: "CATCH_QUESTIONS",
      subscale: "Catch Question",
      survey_question_no: 4,
    },
    {
      question: {
        prompt: "<b>Do you think you should use TikTok less often?</b>",
        labels: cius_choices,
        name: "cius_eight",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 8,
    },
    {
      question: {
        prompt:
          "<b>Have you unsuccessfully tried to spend less time on TikTok?</b>",
        labels: cius_choices,
        name: "cius_nine",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 9,
    },
    {
      question: {
        prompt:
          "<b>Do you rush through your (home) work in order to go on TikTok?</b>",
        labels: cius_choices,
        name: "cius_ten",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 10,
    },
    {
      question: {
        prompt:
          "<b>Do you neglect your daily obligations (work, school, or family life) because you prefer to go on TikTok?</b>",
        labels: cius_choices,
        name: "cius_eleven",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 11,
    },
    {
      question: {
        prompt: "<b>Do you go on TikTok when you are feeling down?</b>",
        labels: cius_choices,
        name: "cius_twelve",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 12,
    },
    {
      question: {
        prompt:
          "<b>Do you use TikTok to escape from your sorrows or get relief from negative feelings?</b>",
        labels: cius_choices,
        name: "cius_thirteen",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 13,
    },
    {
      question: {
        prompt:
          "<b>Do you feel restless, frustrated, or irritated when you cannot use TikTok?</b>",
        labels: cius_choices,
        name: "cius_fourteen",
        required: true,
      },
      reversed: false,
      questionnaire: "CIUS",
      subscale: "CIUS",
      survey_question_no: 14,
    },
  ],
};

let cius = {
  timeline: [cius_instructions, cius_questions],
};

//ASSIST INSTRUCTIONS AND Q1
let assist_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;max-width:1200px;">' +
    "<p>The following questions ask about your experience of using alcohol, tobacco products and other drugs across your lifetime and in the past three months. These substances can be smoked, swallowed, snorted, inhaled or injected. Some of the substances listed may be prescribed by a doctor (like amphetamines, sedatives, pain medications). Please do not select medications that are used as prescribed by your doctor. However, if you have taken such medications for reasons other than prescription, or taken them more frequently or at higher doses than prescribed, please indicate this in the following questions. Please be assured that this information will be treated as strictly confidential.</p>" +
    "</div>",
  choices: ["Continue"],
};

let assist_start = {
  type: jsPsychSurveyHtmlForm,
  preamble:
    '<em>Please only select what is applicable to you. If none apply to you, press "Continue" without selecting any option.</em>',
  html: `
  <div style="text-align: center;">
    <p style="font-size:1.25em; line-height:1.5; margin-bottom: 0.5em;"><b>What substances have you used? Select all that apply.</b></p>
    <div style="display: inline-flex; flex-direction: column; align-items: flex-start; font-size: 1em; max-width: 1200px; margin: 0 auto;">
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="tobacco" name="assist" value="tobacco" style="margin-right: 1em; vertical-align: middle;">
        <span>Tobacco products (cigarettes, chewing tobacco, cigars, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="alcohol" name="assist" value="alcohol" style="margin-right: 1em; vertical-align: middle;">
        <span>Alcoholic beverages (beer, wine, spirits, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="cannabis" name="assist" value="cannabis" style="margin-right: 1em; vertical-align: middle;">
        <span>Cannabis (marijuana, pot, grass, hash, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="cocaine" name="assist" value="cocaine" style="margin-right: 1em; vertical-align: middle;">
        <span>Cocaine (coke, crack, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="amphetamine" name="assist" value="amphetamine" style="margin-right: 1em; vertical-align: middle;">
        <span>Amphetamine-type stimulants (speed, meth, ecstasy, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="inhalants" name="assist" value="inhalants" style="margin-right: 1em; vertical-align: middle;">
        <span>Inhalants (nitrous, glue, petrol, paint thinner, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="sedatives" name="assist" value="sedatives" style="margin-right: 1em; vertical-align: middle;">
        <span>Sedatives or sleeping pills (diazepam, alprazolam, flunitrazepam, midazolam, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="hallucinogens" name="assist" value="hallucinogens" style="margin-right: 1em; vertical-align: middle;">
        <span>Hallucinogens (LSD, acid, mushrooms, trips, ketamine, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="opioids" name="assist" value="opioids" style="margin-right: 1em; vertical-align: middle;">
        <span>Opioids (heroin, morphine, methadone, buprenorphine, codeine, etc.)</span>
      </label>
      <label style="display: flex; align-items: center; margin-bottom: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis;">
        <input type="checkbox" id="other" name="assist" value="other" style="margin-right: 1em; vertical-align: middle;">
        <span>Other (please specify)</span>
        <input style="margin-left: 1em; width: 200px; vertical-align: middle;" type="text" id="other_text" name="other_text" required disabled />
      </label>
    </div>
  </div>
`,
  dataAsArray: true,
  button_label: "Continue",
  on_load: function () {
    document.getElementById("other").addEventListener("change", function () {
      document.getElementById("other_text").disabled = !this.checked;
    });
  },
  on_finish: function (data) {
    let all_drugs = {
      tobacco: false,
      alcohol: false,
      cannabis: false,
      cocaine: false,
      amphetamine: false,
      inhalants: false,
      sedatives: false,
      hallucinogens: false,
      opioids: false,
      other: false,
      other_text: "NA",
    };

    let anySelection = false;

    data.response.forEach((item) => {
      if (item.name === "assist") {
        all_drugs[item.value] = true;
        anySelection = true;
      } else if (item.name === "other_text") {
        all_drugs["other_text"] = item.value.trim() || "NA";
      }
    });

    jatos.studySessionData["all_drugs"] = all_drugs;

    jsPsych.data.addDataToLastTrial({
      all_drugs: all_drugs,
    });

    let flat_drugs = {};
    for (const [key, value] of Object.entries(all_drugs)) {
      flat_drugs[`all_drugs_${key}`] = value;
    }

    jatos.studySessionData = {
      ...jatos.studySessionData,
      ...flat_drugs,
    };

    jsPsych.data.addDataToLastTrial({
      ...flat_drugs,
    });

    data.no_selection = !anySelection;
  },
};

//TOBACCO
let assist2_choices_tobacco = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_tobacco = [0, 2, 3, 4, 6];

let assist_2_tobacco = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>In the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let tobacco_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );

        let weighted_tobacco_response =
          assist2_values_tobacco[tobacco_raw_response_index];

        data.assist2_response_tobacco_raw = tobacco_raw_response_index;
        data.assist2_response_tobacco = weighted_tobacco_response;

        jatos.studySessionData.assist2_response_tobacco =
          weighted_tobacco_response;

        data.skip_to_next = weighted_tobacco_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used tobacco?</b>",
        labels: assist2_choices_tobacco,
        name: "assist_two_tobacco",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Tobacco",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_tobacco = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_tobacco = [0, 3, 4, 5, 6];

let assist_3_tobacco = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let tobacco_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_tobacco_response =
          assist3_values_tobacco[tobacco_raw_response_index];

        data.assist3_response_raw_tobacco = tobacco_raw_response_index;
        data.assist3_response_tobacco = weighted_tobacco_response;

        jatos.studySessionData.assist3_response_tobacco =
          weighted_tobacco_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to use tobacco?</b>",
        labels: assist3_choices_tobacco,
        name: "assist_three_tobacco",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Tobacco",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_tobacco = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_tobacco = [0, 4, 5, 6, 7];

let assist_4_tobacco = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let tobacco_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_tobacco_response =
          assist4_values_tobacco[tobacco_raw_response_index];

        data.assist4_response_raw_tobacco = tobacco_raw_response_index;
        data.assist4_response_tobacco = weighted_tobacco_response;

        jatos.studySessionData.assist4_response_tobacco =
          weighted_tobacco_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of tobacco led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_tobacco,
        name: "assist_four_tobacco",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Tobacco",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_tobacco = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_tobacco = [0, 5, 6, 7, 8];

let assist_5_tobacco = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let tobacco_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_tobacco_response =
          assist5_values_tobacco[tobacco_raw_response_index];

        data.assist5_response_raw_tobacco = tobacco_raw_response_index;
        data.assist5_response_tobacco = weighted_tobacco_response;

        jatos.studySessionData.assist5_response_tobacco =
          weighted_tobacco_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of tobacco?</b>",
        labels: assist5_choices_tobacco,
        name: "assist_five_tobacco",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Tobacco",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_tobacco = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_tobacco = [0, 6, 3];

let assist_6_tobacco = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let tobacco_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_tobacco_response =
          assist6_values_tobacco[tobacco_raw_response_index];

        data.assist6_response_raw_tobacco = tobacco_raw_response_index;
        data.assist6_response_tobacco = weighted_tobacco_response;

        jatos.studySessionData.assist6_response_tobacco =
          weighted_tobacco_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or relative or anyone else ever expressed concern about your use of tobacco?</b>",
        labels: assist6_choices_tobacco,
        name: "assist_six_tobacco",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Tobacco",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_tobacco = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_tobacco = [0, 6, 3];

let assist_7_tobacco = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let tobacco_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_tobacco_response =
          assist7_values_tobacco[tobacco_raw_response_index];

        data.assist7_response_raw_tobacco = tobacco_raw_response_index;
        data.assist7_response_tobacco = weighted_tobacco_response;

        jatos.studySessionData.assist7_response_tobacco =
          weighted_tobacco_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using tobacco but failed?</b>",
        labels: assist7_choices_tobacco,
        name: "assist_seven_tobacco",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Tobacco",
      survey_question_no: 7,
    },
  ],
};

let tobacco = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.tobacco === true;
      },
      timeline: [
        assist_2_tobacco,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [assist_3_tobacco, assist_4_tobacco, assist_5_tobacco],
        },
        assist_6_tobacco,
        assist_7_tobacco,
      ],
    },
  ],
};

//ALCOHOL
let assist2_choices_alcohol = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_alcohol = [0, 2, 3, 4, 6];

let assist_2_alcohol = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let alcohol_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_alcohol_response =
          assist2_values_alcohol[alcohol_raw_response_index];

        data.assist2_response_alcohol_raw = alcohol_raw_response_index;
        data.assist2_response_alcohol = weighted_alcohol_response;

        jatos.studySessionData.assist2_response_alcohol =
          weighted_alcohol_response;

        data.skip_to_next = weighted_alcohol_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used alcohol?</b>",
        labels: assist2_choices_alcohol,
        name: "assist_two_alcohol",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Alcohol",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_alcohol = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_alcohol = [0, 3, 4, 5, 6];

let assist_3_alcohol = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let alcohol_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_alcohol_response =
          assist3_values_alcohol[alcohol_raw_response_index];

        data.assist3_response_raw_alcohol = alcohol_raw_response_index;
        data.assist3_response_alcohol = weighted_alcohol_response;

        jatos.studySessionData.assist3_response_alcohol =
          weighted_alcohol_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to consume alcohol?</b>",
        labels: assist3_choices_alcohol,
        name: "assist_three_alcohol",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Alcohol",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_alcohol = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_alcohol = [0, 4, 5, 6, 7];

let assist_4_alcohol = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let alcohol_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_alcohol_response =
          assist4_values_alcohol[alcohol_raw_response_index];

        data.assist4_response_raw_alcohol = alcohol_raw_response_index;
        data.assist4_response_alcohol = weighted_alcohol_response;

        jatos.studySessionData.assist4_response_alcohol =
          weighted_alcohol_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of alcohol led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_alcohol,
        name: "assist_four_alcohol",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Alcohol",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_alcohol = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_alcohol = [0, 5, 6, 7, 8];

let assist_5_alcohol = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let alcohol_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_alcohol_response =
          assist5_values_alcohol[alcohol_raw_response_index];

        data.assist5_response_raw_alcohol = alcohol_raw_response_index;
        data.assist5_response_alcohol = weighted_alcohol_response;

        jatos.studySessionData.assist5_response_alcohol =
          weighted_alcohol_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of alcohol?</b>",
        labels: assist5_choices_alcohol,
        name: "assist_five_alcohol",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Alcohol",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_alcohol = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_alcohol = [0, 6, 3];

let assist_6_alcohol = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let alcohol_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_alcohol_response =
          assist6_values_alcohol[alcohol_raw_response_index];

        data.assist6_response_raw_alcohol = alcohol_raw_response_index;
        data.assist6_response_alcohol = weighted_alcohol_response;

        jatos.studySessionData.assist6_response_alcohol =
          weighted_alcohol_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or relative or anyone else ever expressed concern about your use of alcohol?</b>",
        labels: assist6_choices_alcohol,
        name: "assist_six_alcohol",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Alcohol",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_alcohol = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_alcohol = [0, 6, 3];

let assist_7_alcohol = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let alcohol_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_alcohol_response =
          assist7_values_alcohol[alcohol_raw_response_index];

        data.assist7_response_raw_alcohol = alcohol_raw_response_index;
        data.assist7_response_alcohol = weighted_alcohol_response;

        jatos.studySessionData.assist7_response_alcohol =
          weighted_alcohol_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using alcohol but failed?</b>",
        labels: assist7_choices_alcohol,
        name: "assist_seven_alcohol",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Alcohol",
      survey_question_no: 7,
    },
  ],
};

let alcohol = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.alcohol === true;
      },
      timeline: [
        assist_2_alcohol,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [assist_3_alcohol, assist_4_alcohol, assist_5_alcohol],
        },
        assist_6_alcohol,
        assist_7_alcohol,
      ],
    },
  ],
};

//CANNABIS
let assist2_choices_cannabis = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_cannabis = [0, 2, 3, 4, 6];

let assist_2_cannabis = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cannabis_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cannabis_response =
          assist2_values_cannabis[cannabis_raw_response_index];

        data.assist2_response_cannabis_raw = cannabis_raw_response_index;
        data.assist2_response_cannabis = weighted_cannabis_response;

        jatos.studySessionData.assist2_response_cannabis =
          weighted_cannabis_response;

        data.skip_to_next = weighted_cannabis_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used cannabis?</b>",
        labels: assist2_choices_cannabis,
        name: "assist_two_cannabis",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cannabis",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_cannabis = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_cannabis = [0, 3, 4, 5, 6];

let assist_3_cannabis = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cannabis_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cannabis_response =
          assist3_values_cannabis[cannabis_raw_response_index];

        data.assist3_response_raw_cannabis = cannabis_raw_response_index;
        data.assist3_response_cannabis = weighted_cannabis_response;

        jatos.studySessionData.assist3_response_cannabis =
          weighted_cannabis_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to consume cannabis?</b>",
        labels: assist3_choices_cannabis,
        name: "assist_three_cannabis",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cannabis",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_cannabis = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_cannabis = [0, 4, 5, 6, 7];

let assist_4_cannabis = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cannabis_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cannabis_response =
          assist4_values_cannabis[cannabis_raw_response_index];

        data.assist4_response_raw_cannabis = cannabis_raw_response_index;
        data.assist4_response_cannabis = weighted_cannabis_response;

        jatos.studySessionData.assist4_response_cannabis =
          weighted_cannabis_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of cannabis led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_cannabis,
        name: "assist_four_cannabis",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cannabis",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_cannabis = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_cannabis = [0, 5, 6, 7, 8];

let assist_5_cannabis = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cannabis_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cannabis_response =
          assist5_values_cannabis[cannabis_raw_response_index];

        data.assist5_response_raw_cannabis = cannabis_raw_response_index;
        data.assist5_response_cannabis = weighted_cannabis_response;

        jatos.studySessionData.assist5_response_cannabis =
          weighted_cannabis_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of cannabis?</b>",
        labels: assist5_choices_cannabis,
        name: "assist_five_cannabis",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cannabis",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_cannabis = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_cannabis = [0, 6, 3];

let assist_6_cannabis = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cannabis_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cannabis_response =
          assist6_values_cannabis[cannabis_raw_response_index];

        data.assist6_response_raw_cannabis = cannabis_raw_response_index;
        data.assist6_response_cannabis = weighted_cannabis_response;

        jatos.studySessionData.assist6_response_cannabis =
          weighted_cannabis_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or relative or anyone else ever expressed concern about your use of cannabis?</b>",
        labels: assist6_choices_cannabis,
        name: "assist_six_cannabis",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cannabis",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_cannabis = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_cannabis = [0, 6, 3];

let assist_7_cannabis = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cannabis_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cannabis_response =
          assist7_values_cannabis[cannabis_raw_response_index];

        data.assist7_response_raw_cannabis = cannabis_raw_response_index;
        data.assist7_response_cannabis = weighted_cannabis_response;

        jatos.studySessionData.assist7_response_cannabis =
          weighted_cannabis_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using cannabis but failed?</b>",
        labels: assist7_choices_cannabis,
        name: "assist_seven_cannabis",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cannabis",
      survey_question_no: 7,
    },
  ],
};

let cannabis = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.cannabis === true;
      },
      timeline: [
        assist_2_cannabis,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [assist_3_cannabis, assist_4_cannabis, assist_5_cannabis],
        },
        assist_6_cannabis,
        assist_7_cannabis,
      ],
    },
  ],
};

//COCAINE
let assist2_choices_cocaine = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_cocaine = [0, 2, 3, 4, 6];

let assist_2_cocaine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cocaine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cocaine_response =
          assist2_values_cocaine[cocaine_raw_response_index];

        data.assist2_response_cocaine_raw = cocaine_raw_response_index;
        data.assist2_response_cocaine = weighted_cocaine_response;

        jatos.studySessionData.assist2_response_cocaine =
          weighted_cocaine_response;

        data.skip_to_next = weighted_cocaine_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used cocaine?</b>",
        labels: assist2_choices_cocaine,
        name: "assist_two_cocaine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cocaine",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_cocaine = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_cocaine = [0, 3, 4, 5, 6];

let assist_3_cocaine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cocaine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cocaine_response =
          assist3_values_cocaine[cocaine_raw_response_index];

        data.assist3_response_raw_cocaine = cocaine_raw_response_index;
        data.assist3_response_cocaine = weighted_cocaine_response;

        jatos.studySessionData.assist3_response_cocaine =
          weighted_cocaine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to use cocaine?</b>",
        labels: assist3_choices_cocaine,
        name: "assist_three_cocaine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cocaine",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_cocaine = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_cocaine = [0, 4, 5, 6, 7];

let assist_4_cocaine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cocaine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cocaine_response =
          assist4_values_cocaine[cocaine_raw_response_index];

        data.assist4_response_raw_cocaine = cocaine_raw_response_index;
        data.assist4_response_cocaine = weighted_cocaine_response;

        jatos.studySessionData.assist4_response_cocaine =
          weighted_cocaine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of cocaine led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_cocaine,
        name: "assist_four_cocaine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cocaine",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_cocaine = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_cocaine = [0, 5, 6, 7, 8];

let assist_5_cocaine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cocaine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cocaine_response =
          assist5_values_cocaine[cocaine_raw_response_index];

        data.assist5_response_raw_cocaine = cocaine_raw_response_index;
        data.assist5_response_cocaine = weighted_cocaine_response;

        jatos.studySessionData.assist5_response_cocaine =
          weighted_cocaine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of cocaine?</b>",
        labels: assist5_choices_cocaine,
        name: "assist_five_cocaine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cocaine",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_cocaine = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_cocaine = [0, 6, 3];

let assist_6_cocaine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cocaine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cocaine_response =
          assist6_values_cocaine[cocaine_raw_response_index];

        data.assist6_response_raw_cocaine = cocaine_raw_response_index;
        data.assist6_response_cocaine = weighted_cocaine_response;

        jatos.studySessionData.assist6_response_cocaine =
          weighted_cocaine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or relative or anyone else ever expressed concern about your use of cocaine?</b>",
        labels: assist6_choices_cocaine,
        name: "assist_six_cocaine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cocaine",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_cocaine = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_cocaine = [0, 6, 3];

let assist_7_cocaine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let cocaine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_cocaine_response =
          assist7_values_cocaine[cocaine_raw_response_index];

        data.assist7_response_raw_cocaine = cocaine_raw_response_index;
        data.assist7_response_cocaine = weighted_cocaine_response;

        jatos.studySessionData.assist7_response_cocaine =
          weighted_cocaine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using cocaine but failed?</b>",
        labels: assist7_choices_cocaine,
        name: "assist_seven_cocaine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Cocaine",
      survey_question_no: 7,
    },
  ],
};

let cocaine = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.cocaine === true;
      },
      timeline: [
        assist_2_cocaine,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [assist_3_cocaine, assist_4_cocaine, assist_5_cocaine],
        },
        assist_6_cocaine,
        assist_7_cocaine,
      ],
    },
  ],
};

//AMPHETAMINE
let assist2_choices_amphetamine = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_amphetamine = [0, 2, 3, 4, 6];

let assist_2_amphetamine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let amphetamine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_amphetamine_response =
          assist2_values_amphetamine[amphetamine_raw_response_index];

        data.assist2_response_amphetamine_raw = amphetamine_raw_response_index;
        data.assist2_response_amphetamine = weighted_amphetamine_response;

        jatos.studySessionData.assist2_response_amphetamine =
          weighted_amphetamine_response;

        data.skip_to_next = weighted_amphetamine_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used amphetamines?</b>",
        labels: assist2_choices_amphetamine,
        name: "assist_two_amphetamine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Amphetamine",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_amphetamine = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_amphetamine = [0, 3, 4, 5, 6];

let assist_3_amphetamine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let amphetamine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_amphetamine_response =
          assist3_values_amphetamine[amphetamine_raw_response_index];

        data.assist3_response_raw_amphetamine = amphetamine_raw_response_index;
        data.assist3_response_amphetamine = weighted_amphetamine_response;

        jatos.studySessionData.assist3_response_amphetamine =
          weighted_amphetamine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to use amphetamines?</b>",
        labels: assist3_choices_amphetamine,
        name: "assist_three_amphetamine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Amphetamine",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_amphetamine = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_amphetamine = [0, 4, 5, 6, 7];

let assist_4_amphetamine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let amphetamine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_amphetamine_response =
          assist4_values_amphetamine[amphetamine_raw_response_index];

        data.assist4_response_raw_amphetamine = amphetamine_raw_response_index;
        data.assist4_response_amphetamine = weighted_amphetamine_response;

        jatos.studySessionData.assist4_response_amphetamine =
          weighted_amphetamine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of amphetamines led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_amphetamine,
        name: "assist_four_amphetamine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Amphetamine",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_amphetamine = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_amphetamine = [0, 5, 6, 7, 8];

let assist_5_amphetamine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let amphetamine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_amphetamine_response =
          assist5_values_amphetamine[amphetamine_raw_response_index];

        data.assist5_response_raw_amphetamine = amphetamine_raw_response_index;
        data.assist5_response_amphetamine = weighted_amphetamine_response;

        jatos.studySessionData.assist5_response_amphetamine =
          weighted_amphetamine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of amphetamines?</b>",
        labels: assist5_choices_amphetamine,
        name: "assist_five_amphetamine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Amphetamine",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_amphetamine = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_amphetamine = [0, 6, 3];

let assist_6_amphetamine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let amphetamine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_amphetamine_response =
          assist6_values_amphetamine[amphetamine_raw_response_index];

        data.assist6_response_raw_amphetamine = amphetamine_raw_response_index;
        data.assist6_response_amphetamine = weighted_amphetamine_response;

        jatos.studySessionData.assist6_response_amphetamine =
          weighted_amphetamine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or family member or anyone else ever expressed concern about your use of amphetamines?</b>",
        labels: assist6_choices_amphetamine,
        name: "assist_six_amphetamine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Amphetamine",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_amphetamine = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_amphetamine = [0, 6, 3];

let assist_7_amphetamine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let amphetamine_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_amphetamine_response =
          assist7_values_amphetamine[amphetamine_raw_response_index];

        data.assist7_response_raw_amphetamine = amphetamine_raw_response_index;
        data.assist7_response_amphetamine = weighted_amphetamine_response;

        jatos.studySessionData.assist7_response_amphetamine =
          weighted_amphetamine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using amphetamines but failed?</b>",
        labels: assist7_choices_amphetamine,
        name: "assist_seven_amphetamine",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Amphetamine",
      survey_question_no: 7,
    },
  ],
};

let amphetamine = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.amphetamine === true;
      },
      timeline: [
        assist_2_amphetamine,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [
            assist_3_amphetamine,
            assist_4_amphetamine,
            assist_5_amphetamine,
          ],
        },
        assist_6_amphetamine,
        assist_7_amphetamine,
      ],
    },
  ],
};

//INHALANTS
let assist2_choices_inhalants = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_inhalants = [0, 2, 3, 4, 6];

let assist_2_inhalants = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let inhalants_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_inhalants_response =
          assist2_values_inhalants[inhalants_raw_response_index];

        data.assist2_response_inhalants_raw = inhalants_raw_response_index;
        data.assist2_response_inhalants = weighted_inhalants_response;

        jatos.studySessionData.assist2_response_inhalants =
          weighted_inhalants_response;

        data.skip_to_next = weighted_inhalants_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used inhalants?</b>",
        labels: assist2_choices_inhalants,
        name: "assist_two_inhalants",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Inhalants",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_inhalants = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_inhalants = [0, 3, 4, 5, 6];

let assist_3_inhalants = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let inhalants_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_inhalants_response =
          assist3_values_inhalants[inhalants_raw_response_index];

        data.assist3_response_raw_inhalants = inhalants_raw_response_index;
        data.assist3_response_inhalants = weighted_inhalants_response;

        jatos.studySessionData.assist3_response_inhalants =
          weighted_inhalants_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to use inhalants?</b>",
        labels: assist3_choices_inhalants,
        name: "assist_three_inhalants",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Inhalants",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_inhalants = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_inhalants = [0, 4, 5, 6, 7];

let assist_4_inhalants = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let inhalants_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_inhalants_response =
          assist4_values_inhalants[inhalants_raw_response_index];

        data.assist4_response_raw_inhalants = inhalants_raw_response_index;
        data.assist4_response_inhalants = weighted_inhalants_response;

        jatos.studySessionData.assist4_response_inhalants =
          weighted_inhalants_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of inhalants led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_inhalants,
        name: "assist_four_inhalants",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Inhalants",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_inhalants = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_inhalants = [0, 5, 6, 7, 8];

let assist_5_inhalants = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let inhalants_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_inhalants_response =
          assist5_values_inhalants[inhalants_raw_response_index];

        data.assist5_response_raw_inhalants = inhalants_raw_response_index;
        data.assist5_response_inhalants = weighted_inhalants_response;

        jatos.studySessionData.assist5_response_inhalants =
          weighted_inhalants_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of inhalants?</b>",
        labels: assist5_choices_inhalants,
        name: "assist_five_inhalants",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Inhalants",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_inhalants = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_inhalants = [0, 6, 3];

let assist_6_inhalants = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let inhalants_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_inhalants_response =
          assist6_values_inhalants[inhalants_raw_response_index];

        data.assist6_response_raw_inhalants = inhalants_raw_response_index;
        data.assist6_response_inhalants = weighted_inhalants_response;

        jatos.studySessionData.assist6_response_inhalants =
          weighted_inhalants_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or relative or anyone else ever expressed concern about your use of inhalants?</b>",
        labels: assist6_choices_inhalants,
        name: "assist_six_inhalants",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Inhalants",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_inhalants = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_inhalants = [0, 6, 3];

let assist_7_inhalants = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let inhalants_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_inhalants_response =
          assist7_values_inhalants[inhalants_raw_response_index];

        data.assist7_response_raw_inhalants = inhalants_raw_response_index;
        data.assist7_response_inhalants = weighted_inhalants_response;

        jatos.studySessionData.assist7_response_inhalants =
          weighted_inhalants_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using inhalants but failed?</b>",
        labels: assist7_choices_inhalants,
        name: "assist_seven_inhalants",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Inhalants",
      survey_question_no: 7,
    },
  ],
};

let inhalants = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.inhalants === true;
      },
      timeline: [
        assist_2_inhalants,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [
            assist_3_inhalants,
            assist_4_inhalants,
            assist_5_inhalants,
          ],
        },
        assist_6_inhalants,
        assist_7_inhalants,
      ],
    },
  ],
};

//SEDATIVES
let assist2_choices_sedatives = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_sedatives = [0, 2, 3, 4, 6];

let assist_2_sedatives = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let sedatives_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_sedatives_response =
          assist2_values_sedatives[sedatives_raw_response_index];

        data.assist2_response_sedatives_raw = sedatives_raw_response_index;
        data.assist2_response_sedatives = weighted_sedatives_response;

        jatos.studySessionData.assist2_response_sedatives =
          weighted_sedatives_response;

        data.skip_to_next = weighted_sedatives_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used sedatives?</b>",
        labels: assist2_choices_sedatives,
        name: "assist_two_sedatives",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Sedatives",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_sedatives = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_sedatives = [0, 3, 4, 5, 6];

let assist_3_sedatives = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let sedatives_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_sedatives_response =
          assist3_values_sedatives[sedatives_raw_response_index];

        data.assist3_response_raw_sedatives = sedatives_raw_response_index;
        data.assist3_response_sedatives = weighted_sedatives_response;

        jatos.studySessionData.assist3_response_sedatives =
          weighted_sedatives_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to use sedatives?</b>",
        labels: assist3_choices_sedatives,
        name: "assist_three_sedatives",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Sedatives",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_sedatives = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_sedatives = [0, 4, 5, 6, 7];

let assist_4_sedatives = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let sedatives_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_sedatives_response =
          assist4_values_sedatives[sedatives_raw_response_index];

        data.assist4_response_raw_sedatives = sedatives_raw_response_index;
        data.assist4_response_sedatives = weighted_sedatives_response;

        jatos.studySessionData.assist4_response_sedatives =
          weighted_sedatives_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of sedatives led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_sedatives,
        name: "assist_four_sedatives",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Sedatives",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_sedatives = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_sedatives = [0, 5, 6, 7, 8];

let assist_5_sedatives = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let sedatives_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_sedatives_response =
          assist5_values_sedatives[sedatives_raw_response_index];

        data.assist5_response_raw_sedatives = sedatives_raw_response_index;
        data.assist5_response_sedatives = weighted_sedatives_response;

        jatos.studySessionData.assist5_response_sedatives =
          weighted_sedatives_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of sedatives?</b>",
        labels: assist5_choices_sedatives,
        name: "assist_five_sedatives",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Sedatives",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_sedatives = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_sedatives = [0, 6, 3];

let assist_6_sedatives = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let sedatives_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_sedatives_response =
          assist6_values_sedatives[sedatives_raw_response_index];

        data.assist6_response_raw_sedatives = sedatives_raw_response_index;
        data.assist6_response_sedatives = weighted_sedatives_response;

        jatos.studySessionData.assist6_response_sedatives =
          weighted_sedatives_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or relative or anyone else ever expressed concern about your use of sedatives?</b>",
        labels: assist6_choices_sedatives,
        name: "assist_six_sedatives",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Sedatives",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_sedatives = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_sedatives = [0, 6, 3];

let assist_7_sedatives = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let sedatives_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_sedatives_response =
          assist7_values_sedatives[sedatives_raw_response_index];

        data.assist7_response_raw_sedatives = sedatives_raw_response_index;
        data.assist7_response_sedatives = weighted_sedatives_response;

        jatos.studySessionData.assist7_response_sedatives =
          weighted_sedatives_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using sedatives but failed?</b>",
        labels: assist7_choices_sedatives,
        name: "assist_seven_sedatives",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Sedatives",
      survey_question_no: 7,
    },
  ],
};

let sedatives = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.sedatives === true;
      },
      timeline: [
        assist_2_sedatives,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [
            assist_3_sedatives,
            assist_4_sedatives,
            assist_5_sedatives,
          ],
        },
        assist_6_sedatives,
        assist_7_sedatives,
      ],
    },
  ],
};

//HALLUCINOGENS
let assist2_choices_hallucinogens = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_hallucinogens = [0, 2, 3, 4, 6];

let assist_2_hallucinogens = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let hallucinogens_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_hallucinogens_response =
          assist2_values_hallucinogens[hallucinogens_raw_response_index];

        data.assist2_response_hallucinogens_raw =
          hallucinogens_raw_response_index;
        data.assist2_response_hallucinogens = weighted_hallucinogens_response;

        jatos.studySessionData.assist2_response_hallucinogens =
          weighted_hallucinogens_response;

        data.skip_to_next = weighted_hallucinogens_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used hallucinogens?</b>",
        labels: assist2_choices_hallucinogens,
        name: "assist_two_hallucinogens",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Hallucinogens",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_hallucinogens = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_hallucinogens = [0, 3, 4, 5, 6];

let assist_3_hallucinogens = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let hallucinogens_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_hallucinogens_response =
          assist3_values_hallucinogens[hallucinogens_raw_response_index];

        data.assist3_response_raw_hallucinogens =
          hallucinogens_raw_response_index;
        data.assist3_response_hallucinogens = weighted_hallucinogens_response;

        jatos.studySessionData.assist3_response_hallucinogens =
          weighted_hallucinogens_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to use hallucinogens?</b>",
        labels: assist3_choices_hallucinogens,
        name: "assist_three_hallucinogens",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Hallucinogens",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_hallucinogens = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_hallucinogens = [0, 4, 5, 6, 7];

let assist_4_hallucinogens = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let hallucinogens_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_hallucinogens_response =
          assist4_values_hallucinogens[hallucinogens_raw_response_index];

        data.assist4_response_raw_hallucinogens =
          hallucinogens_raw_response_index;
        data.assist4_response_hallucinogens = weighted_hallucinogens_response;

        jatos.studySessionData.assist4_response_hallucinogens =
          weighted_hallucinogens_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of hallucinogens led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_hallucinogens,
        name: "assist_four_hallucinogens",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Hallucinogens",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_hallucinogens = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_hallucinogens = [0, 5, 6, 7, 8];

let assist_5_hallucinogens = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let hallucinogens_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_hallucinogens_response =
          assist5_values_hallucinogens[hallucinogens_raw_response_index];

        data.assist5_response_raw_hallucinogens =
          hallucinogens_raw_response_index;
        data.assist5_response_hallucinogens = weighted_hallucinogens_response;

        jatos.studySessionData.assist5_response_hallucinogens =
          weighted_hallucinogens_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of hallucinogens?</b>",
        labels: assist5_choices_hallucinogens,
        name: "assist_five_hallucinogens",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Hallucinogens",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_hallucinogens = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_hallucinogens = [0, 6, 3];

let assist_6_hallucinogens = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let hallucinogens_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_hallucinogens_response =
          assist6_values_hallucinogens[hallucinogens_raw_response_index];

        data.assist6_response_raw_hallucinogens =
          hallucinogens_raw_response_index;
        data.assist6_response_hallucinogens = weighted_hallucinogens_response;

        jatos.studySessionData.assist6_response_hallucinogens =
          weighted_hallucinogens_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or relative or anyone else ever expressed concern about your use of hallucinogens?</b>",
        labels: assist6_choices_hallucinogens,
        name: "assist_six_hallucinogens",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Hallucinogens",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_hallucinogens = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_hallucinogens = [0, 6, 3];

let assist_7_hallucinogens = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let hallucinogens_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_hallucinogens_response =
          assist7_values_hallucinogens[hallucinogens_raw_response_index];

        data.assist7_response_raw_hallucinogens =
          hallucinogens_raw_response_index;
        data.assist7_response_hallucinogens = weighted_hallucinogens_response;

        jatos.studySessionData.assist7_response_hallucinogens =
          weighted_hallucinogens_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using hallucinogens but failed?</b>",
        labels: assist7_choices_hallucinogens,
        name: "assist_seven_hallucinogens",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Hallucinogens",
      survey_question_no: 7,
    },
  ],
};

let hallucinogens = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.hallucinogens === true;
      },
      timeline: [
        assist_2_hallucinogens,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [
            assist_3_hallucinogens,
            assist_4_hallucinogens,
            assist_5_hallucinogens,
          ],
        },
        assist_6_hallucinogens,
        assist_7_hallucinogens,
      ],
    },
  ],
};

//OPIOIDS
let assist2_choices_opioids = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_opioids = [0, 2, 3, 4, 6];

let assist_2_opioids = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let opioids_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_opioids_response =
          assist2_values_opioids[opioids_raw_response_index];

        data.assist2_response_opioids_raw = opioids_raw_response_index;
        data.assist2_response_opioids = weighted_opioids_response;

        jatos.studySessionData.assist2_response_opioids =
          weighted_opioids_response;

        data.skip_to_next = weighted_opioids_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: "<b>How often have you used opioids?</b>",
        labels: assist2_choices_opioids,
        name: "assist_two_opioids",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Opioids",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_opioids = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_opioids = [0, 3, 4, 5, 6];

let assist_3_opioids = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let opioids_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_opioids_response =
          assist3_values_opioids[opioids_raw_response_index];

        data.assist3_response_raw_opioids = opioids_raw_response_index;
        data.assist3_response_opioids = weighted_opioids_response;

        jatos.studySessionData.assist3_response_opioids =
          weighted_opioids_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you had a strong desire or urge to use opioids?</b>",
        labels: assist3_choices_opioids,
        name: "assist_three_opioids",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Opioids",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_opioids = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_opioids = [0, 4, 5, 6, 7];

let assist_4_opioids = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let opioids_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_opioids_response =
          assist4_values_opioids[opioids_raw_response_index];

        data.assist4_response_raw_opioids = opioids_raw_response_index;
        data.assist4_response_opioids = weighted_opioids_response;

        jatos.studySessionData.assist4_response_opioids =
          weighted_opioids_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often has your use of opioids led to health, social, legal or financial problems?</b>",
        labels: assist4_choices_opioids,
        name: "assist_four_opioids",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Opioids",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_opioids = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_opioids = [0, 5, 6, 7, 8];

let assist_5_opioids = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let opioids_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_opioids_response =
          assist5_values_opioids[opioids_raw_response_index];

        data.assist5_response_raw_opioids = opioids_raw_response_index;
        data.assist5_response_opioids = weighted_opioids_response;

        jatos.studySessionData.assist5_response_opioids =
          weighted_opioids_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How often have you failed to do what was normally expected of you because of your use of opioids?</b>",
        labels: assist5_choices_opioids,
        name: "assist_five_opioids",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Opioids",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_opioids = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_opioids = [0, 6, 3];

let assist_6_opioids = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let opioids_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_opioids_response =
          assist6_values_opioids[opioids_raw_response_index];

        data.assist6_response_raw_opioids = opioids_raw_response_index;
        data.assist6_response_opioids = weighted_opioids_response;

        jatos.studySessionData.assist6_response_opioids =
          weighted_opioids_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Has a friend or relative or anyone else ever expressed concern about your use of opioids?</b>",
        labels: assist6_choices_opioids,
        name: "assist_six_opioids",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Opioids",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_opioids = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_opioids = [0, 6, 3];

let assist_7_opioids = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let opioids_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_opioids_response =
          assist7_values_opioids[opioids_raw_response_index];

        data.assist7_response_raw_opioids = opioids_raw_response_index;
        data.assist7_response_opioids = weighted_opioids_response;

        jatos.studySessionData.assist7_response_opioids =
          weighted_opioids_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>Have you ever tried to cut down on using opioids but failed?</b>",
        labels: assist7_choices_opioids,
        name: "assist_seven_opioids",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Opioids",
      survey_question_no: 7,
    },
  ],
};

let opioids = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.opioids === true;
      },
      timeline: [
        assist_2_opioids,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [assist_3_opioids, assist_4_opioids, assist_5_opioids],
        },
        assist_6_opioids,
        assist_7_opioids,
      ],
    },
  ],
};

//OTHER
let assist2_choices_specified_drug = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist2_values_specified_drug = [0, 2, 3, 4, 6];

let assist_2_specified_drug = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let specified_drug_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_specified_drug_response =
          assist2_values_specified_drug[specified_drug_raw_response_index];

        data.assist2_response_specified_drug_raw =
          specified_drug_raw_response_index;
        data.assist2_response_specified_drug = weighted_specified_drug_response;

        jatos.studySessionData.assist2_response_specified_drug =
          weighted_specified_drug_response;

        data.skip_to_next = weighted_specified_drug_response === 0;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: function () {
          let otherDrug =
            jatos.studySessionData.all_drugs.other_text ||
            "your specified drug";
          return `<b>How often have you used ${otherDrug}?</b>`;
        },
        labels: assist2_choices_specified_drug,
        name: "assist_two_specified_drug",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Specified Drug",
      survey_question_no: 2,
    },
  ],
};

let assist3_choices_specified_drug = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist3_values_specified_drug = [0, 3, 4, 5, 6];

let assist_3_specified_drug = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let specified_drug_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_specified_drug_response =
          assist3_values_specified_drug[specified_drug_raw_response_index];

        data.assist3_response_raw_specified_drug =
          specified_drug_raw_response_index;
        data.assist3_response_specified_drug = weighted_specified_drug_response;

        jatos.studySessionData.assist3_response_specified_drug =
          weighted_specified_drug_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: function () {
          let otherDrug =
            jatos.studySessionData.all_drugs?.other_text ||
            "your specified drug";
          return `<b>How often have you had a strong desire or urge to use ${otherDrug}?</b>`;
        },
        labels: assist3_choices_specified_drug,
        name: "assist_three_specified_drug",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Specified Drug",
      survey_question_no: 3,
    },
  ],
};

let assist4_choices_specified_drug = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist4_values_specified_drug = [0, 4, 5, 6, 7];

let assist_4_specified_drug = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let specified_drug_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_specified_drug_response =
          assist4_values_specified_drug[specified_drug_raw_response_index];

        data.assist4_response_raw_specified_drug =
          specified_drug_raw_response_index;
        data.assist4_response_specified_drug = weighted_specified_drug_response;

        jatos.studySessionData.assist4_response_specified_drug =
          weighted_specified_drug_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: function () {
          let otherDrug =
            jatos.studySessionData.all_drugs?.other_text ||
            "your specified drug";
          return `<b>How often has your use of ${otherDrug} led to health, social, legal or financial problems?</b>`;
        },
        labels: assist4_choices_specified_drug,
        name: "assist_four_specified_drug",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Specified Drug",
      survey_question_no: 4,
    },
  ],
};

let assist5_choices_specified_drug = [
  "<p>Never</p>",
  "<p>Once or Twice</p>",
  "<p>Monthly</p>",
  "<p>Weekly</p>",
  "<p>Daily or Almost Daily</p>",
];

let assist5_values_specified_drug = [0, 5, 6, 7, 8];

let assist_5_specified_drug = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      preamble: "<em>During the past three months...</em>",
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let specified_drug_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_specified_drug_response =
          assist5_values_specified_drug[specified_drug_raw_response_index];

        data.assist5_response_raw_specified_drug =
          specified_drug_raw_response_index;
        data.assist5_response_specified_drug = weighted_specified_drug_response;

        jatos.studySessionData.assist5_response_specified_drug =
          weighted_specified_drug_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: function () {
          let otherDrug =
            jatos.studySessionData.all_drugs?.other_text ||
            "your specified drug";
          return `<b>How often have you failed to do what was normally expected of you because of your use of ${otherDrug}?</b>`;
        },
        labels: assist5_choices_specified_drug,
        name: "assist_five_specified_drug",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Specified Drug",
      survey_question_no: 5,
    },
  ],
};

let assist6_choices_specified_drug = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist6_values_specified_drug = [0, 6, 3];

let assist_6_specified_drug = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let specified_drug_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_specified_drug_response =
          assist6_values_specified_drug[specified_drug_raw_response_index];

        data.assist6_response_raw_specified_drug =
          specified_drug_raw_response_index;
        data.assist6_response_specified_drug = weighted_specified_drug_response;

        jatos.studySessionData.assist6_response_specified_drug =
          weighted_specified_drug_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: function () {
          let otherDrug =
            jatos.studySessionData.all_drugs?.other_text ||
            "your specified drug";
          return `<b>Has a friend or relative or anyone else ever expressed concern about your use of ${otherDrug}?</b>`;
        },
        labels: assist6_choices_specified_drug,
        name: "assist_six_specified_drug",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Specified Drug",
      survey_question_no: 6,
    },
  ],
};

let assist7_choices_specified_drug = [
  "<p>No, never</p>",
  "<p>Yes, in the past 3 months</p>",
  "<p>Yes, but not in the past 3 months</p>",
];

let assist7_values_specified_drug = [0, 6, 3];

let assist_7_specified_drug = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let specified_drug_raw_response_index = parseInt(
          Object.values(responseObj)[0]
        );
        let weighted_specified_drug_response =
          assist7_values_specified_drug[specified_drug_raw_response_index];

        data.assist7_response_raw_specified_drug =
          specified_drug_raw_response_index;
        data.assist7_response_specified_drug = weighted_specified_drug_response;

        jatos.studySessionData.assist7_response_specified_drug =
          weighted_specified_drug_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: function () {
          let otherDrug =
            jatos.studySessionData.all_drugs?.other_text ||
            "your specified drug";
          return `<b>Have you ever tried to cut down on using ${otherDrug} but failed?</b>`;
        },
        labels: assist7_choices_specified_drug,
        name: "assist_seven_specified_drug",
        required: true,
      },
      questionnaire: "ASSIST",
      subscale: "Specified Drug",
      survey_question_no: 7,
    },
  ],
};

let specified_drug = {
  timeline: [
    {
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs.other === true;
      },
      timeline: [
        assist_2_specified_drug,
        {
          conditional_function: function () {
            let last_trial_data = jsPsych.data.get().last(1).values()[0];
            return !last_trial_data.skip_to_next;
          },
          timeline: [
            assist_3_specified_drug,
            assist_4_specified_drug,
            assist_5_specified_drug,
          ],
        },
        assist_6_specified_drug,
        assist_7_specified_drug,
      ],
    },
  ],
};

//ASSIST Q8 AND WRAPUP
let assist_8 = {
  type: jsPsychSurveyHtmlForm,
  html: `
    <div style="text-align: center;">
      <p style="font-size:1.25em;margin-bottom:2em">
        <b>Have you ever used any drug by injection (non-medical use only)?</b>
      </p>
      <div style="display: inline-flex; flex-direction: column; align-items: start; font-size: 1.25em; max-width: 800px; margin: 0 auto;">
        <label style="margin-bottom: 0.5em;">
          <input type="radio" id="no" name="assist" value="no" required>
          <span style="margin-left: 0.5em;">No, Never</span>
        </label>
        <label style="margin-bottom: 0.5em;">
          <input type="radio" id="yes_recent" name="assist" value="yes_recent">
          <span style="margin-left: 0.5em;">Yes, in the past 3 months</span>
        </label>
        <label style="margin-bottom: 0.5em;">
          <input type="radio" id="yes_notrecent" name="assist" value="yes_notrecent">
          <span style="margin-left: 0.5em;">Yes, but not in the past 3 months</span>
        </label>
      </div>
    </div>`,
  button_label: "Continue",
  on_finish: function (data) {
    let assist_8_response = jsPsych.data.get().last(1).values()[0].response;

    if (assist_8_response.assist === "yes_recent") {
      data.assist_8 = 1;
      jatos.studySessionData.assist8_response = 1;
    } else if (assist_8_response.assist === "no") {
      data.assist_8 = 0;
      jatos.studySessionData.assist8_response = 0;
    } else if (assist_8_response.assist === "yes_notrecent") {
      data.assist_8 = 2;
      jatos.studySessionData.assist8_response = 2;
    }
  },
};

let assist_8_followup = {
  conditional_function: function () {
    let assist_8_response = jsPsych.data.get().last(1).values()[0].response;
    return assist_8_response.assist === "yes_recent";
  },
  timeline: [
    {
      type: jsPsychSurveyText,
      questions: [
        {
          prompt:
            "<p style='font-size:1.25em;line-height:1.5'><b>What are your injecting patterns over this period? Please describe.</b></p>",
          name: "assist_8_text",
          rows: 20,
          columns: 100,
          required: true,
          placeholder: "Write your answer here...",
        },
      ],
      button_label: "Continue",
      data: { questionnaire: "assist_8", question_no: "1" },
      on_load: function () {
        const responseTextArea = document.querySelector(
          ".jspsych-survey-text textarea"
        );
        if (responseTextArea) {
          responseTextArea.style.fontSize = "1.5em";
        }
      },
      on_finish: function (data) {
        let responses = jsPsych.data.get().last(1).values()[0].response;

        let assist_8_text = responses.assist_8_text || "No response provided";

        data.assist_8_response = assist_8_text;
        jatos.studySessionData.assist8_followup = assist_8_text;
      },
    },
  ],
};

let assist = {
  timeline: [
    assist_instructions,
    assist_start,
    tobacco,
    alcohol,
    cannabis,
    cocaine,
    amphetamine,
    inhalants,
    sedatives,
    hallucinogens,
    opioids,
    specified_drug,
    {
      timeline: [assist_8, assist_8_followup],
      conditional_function: function () {
        let last_trial = jsPsych.data.get().last(1).values()[0];
        return !last_trial.no_selection;
      },
    },
  ],
};

//RISQ
let risq_q1_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;max-width:1200px;">' +
    "<p>Please provide ratings for the following statement:</p>" +
    "<p><b>'I do this behaviour to stop feeling upset, distressed, or overwhelmed.'</b></p>" +
    "<p> And select the repsonse that reflects how you feel best.</p>" +
    "</div>",
  choices: ["Continue"],
};

let q1_choices = [
  "<p>Strongly disagree</p>",
  "<p>Disagree</p>",
  "<p>Equally disagree/agree</p>",
  "<p>Agree</p>",
  "<p>Strongly agree</p>",
];

let risq_q1_default = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_default_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_default_response = risq1_default_response;

        if (!jatos.studySessionData.risq1_default_response) {
          jatos.studySessionData.risq1_default_response = [];
        }

        jatos.studySessionData.risq1_default_response.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.risq1_default_response,
        });
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use TikTok to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_tiktok",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "tiktok",
      survey_question_no: 1,
    },
    {
      question: {
        prompt:
          "<b>I watch Netflix to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_netflix",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "netflix",
      survey_question_no: 2,
    },
    {
      question: {
        prompt:
          "<b>I gamble with money to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_gambling",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "gambling",
      survey_question_no: 3,
    },
  ],
};

let risq_q1_tobacco = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_tobacco_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_tobacco_response = risq1_tobacco_response;

        jatos.studySessionData.risq1_tobacco_response = risq1_tobacco_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use tobacco products to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_tobacco",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "tobacco",
      survey_question_no: 4,
    },
  ],
};

let risq_q1_alcohol = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_alcohol_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_alcohol_response = risq1_alcohol_response;

        jatos.studySessionData.risq1_alcohol_response = risq1_alcohol_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I drink alcoholic beverages to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_alcohol",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "alcohol",
      survey_question_no: 5,
    },
  ],
};

let risq_q1_cannabis = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_cannabis_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_cannabis_response = risq1_cannabis_response;

        jatos.studySessionData.risq1_cannabis_response =
          risq1_cannabis_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use cannabis to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_cannabis",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "cannabis",
      survey_question_no: 6,
    },
  ],
};

let risq_q1_cocaine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_cocaine_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_cocaine_response = risq1_cocaine_response;

        jatos.studySessionData.risq1_cocaine_response = risq1_cocaine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use cocaine to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_cocaine",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "cocaine",
      survey_question_no: 7,
    },
  ],
};

let risq_q1_amphetamine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_amphetamine_response = parseInt(
          Object.values(responseObj)[0]
        );

        data.risq1_amphetamine_response = risq1_amphetamine_response;

        jatos.studySessionData.risq1_amphetamine_response =
          risq1_amphetamine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use amphetamines to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_amphetamine",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "amphetamine",
      survey_question_no: 8,
    },
  ],
};

let risq_q1_inhalants = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_inhalants_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_inhalants_response = risq1_inhalants_response;

        jatos.studySessionData.risq1_inhalants_response =
          risq1_inhalants_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use inhalants to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_inhalants",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "inhalants",
      survey_question_no: 9,
    },
  ],
};

let risq_q1_sedatives = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_sedatives_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_sedatives_response = risq1_sedatives_response;

        jatos.studySessionData.risq1_sedatives_response =
          risq1_sedatives_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use sedatives to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_sedatives",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "sedatives",
      survey_question_no: 10,
    },
  ],
};

let risq_q1_hallucinogens = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_hallucinogens_response = parseInt(
          Object.values(responseObj)[0]
        );

        data.risq1_hallucinogens_response = risq1_hallucinogens_response;

        jatos.studySessionData.risq1_hallucinogens_response =
          risq1_hallucinogens_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use hallucinogens to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_hallucinogens",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "hallucinogens",
      survey_question_no: 11,
    },
  ],
};

let risq_q1_opioids = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_opioids_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_opioids_response = risq1_opioids_response;

        jatos.studySessionData.risq1_opioids_response = risq1_opioids_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use opioids to stop feeling upset, distressed, or overwhelmed.</b>",
        labels: q1_choices,
        name: "RISQ_opioids",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "opioids",
      survey_question_no: 12,
    },
  ],
};

let risq_q1_other = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq1_other_response = parseInt(Object.values(responseObj)[0]);

        data.risq1_other_response = risq1_other_response;

        jatos.studySessionData.risq1_other_response = risq1_other_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: function () {
          let otherDrug =
            jatos.studySessionData.all_drugs?.other_text ||
            "your specified drug";
          return `<b>I use ${otherDrug} to stop feeling upset, distressed, or overwhelmed.</b>`;
        },
        labels: q1_choices,
        name: "RISQ_other",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "other",
      survey_question_no: 13,
    },
  ],
};

let risq_q1 = {
  timeline: [
    risq_q1_instructions,
    risq_q1_default,
    {
      timeline: [risq_q1_tobacco],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.tobacco === true;
      },
    },
    {
      timeline: [risq_q1_alcohol],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.alcohol === true;
      },
    },
    {
      timeline: [risq_q1_cannabis],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.cannabis === true;
      },
    },
    {
      timeline: [risq_q1_cocaine],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.cocaine === true;
      },
    },
    {
      timeline: [risq_q1_amphetamine],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.amphetamine === true;
      },
    },
    {
      timeline: [risq_q1_inhalants],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.inhalants === true;
      },
    },
    {
      timeline: [risq_q1_sedatives],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.sedatives === true;
      },
    },
    {
      timeline: [risq_q1_hallucinogens],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.hallucinogens === true;
      },
    },
    {
      timeline: [risq_q1_opioids],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.opioids === true;
      },
    },
    {
      timeline: [risq_q1_other],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.other === true;
      },
    },
  ],
};

let risq_q2_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;max-width:1200px;">' +
    "<p>Please provide ratings for the following statement:</p>" +
    "<p><b>'I do this behaviour to feel excitement, to get a thrill, or to feel pleasure.'</b></p>" +
    "<p> And select the repsonse that reflects how you feel best.</p>" +
    "</div>",
  choices: ["Continue"],
};

let q2_choices = [
  "<p>Strongly disagree</p>",
  "<p>Disagree</p>",
  "<p>Equally disagree/agree</p>",
  "<p>Agree</p>",
  "<p>Strongly agree</p>",
];

let risq_q2_default = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_default_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_default_response = risq2_default_response;

        if (!jatos.studySessionData.risq2_default_response) {
          jatos.studySessionData.risq2_default_response = [];
        }

        jatos.studySessionData.risq2_default_response.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.risq2_default_response,
        });
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use TikTok to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q2_choices,
        name: "RISQ_tiktok",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "tiktok",
      survey_question_no: 1,
    },
    {
      question: {
        prompt:
          "<b>I watch Netflix to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q2_choices,
        name: "RISQ_netflix",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "netflix",
      survey_question_no: 2,
    },
    {
      question: {
        prompt:
          "<b>I gamble with money to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q2_choices,
        name: "RISQ_gambling",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "gambling",
      survey_question_no: 3,
    },
  ],
};

let risq_q2_tobacco = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_tobacco_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_tobacco_response = risq2_tobacco_response;

        jatos.studySessionData.risq2_tobacco_response = risq2_tobacco_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use tobacco products to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_tobacco",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "tobacco",
      survey_question_no: 4,
    },
  ],
};

let risq_q2_alcohol = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_alcohol_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_alcohol_response = risq2_alcohol_response;

        jatos.studySessionData.risq2_alcohol_response = risq2_alcohol_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I drink alcoholic beverages to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_alcohol",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "alcohol",
      survey_question_no: 5,
    },
  ],
};

let risq_q2_cannabis = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_cannabis_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_cannabis_response = risq2_cannabis_response;

        jatos.studySessionData.risq2_cannabis_response =
          risq2_cannabis_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use cannabis to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_cannabis",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "cannabis",
      survey_question_no: 6,
    },
  ],
};

let risq_q2_cocaine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_cocaine_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_cocaine_response = risq2_cocaine_response;

        jatos.studySessionData.risq2_cocaine_response = risq2_cocaine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use cocaine to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_cocaine",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "cocaine",
      survey_question_no: 7,
    },
  ],
};

let risq_q2_amphetamine = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_amphetamine_response = parseInt(
          Object.values(responseObj)[0]
        );

        data.risq2_amphetamine_response = risq2_amphetamine_response;

        jatos.studySessionData.risq2_amphetamine_response =
          risq2_amphetamine_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use amphetamines to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_amphetamine",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "amphetamine",
      survey_question_no: 8,
    },
  ],
};

let risq_q2_inhalants = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_inhalants_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_inhalants_response = risq2_inhalants_response;

        jatos.studySessionData.risq2_inhalants_response =
          risq2_inhalants_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use inhalants to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_inhalants",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "inhalants",
      survey_question_no: 9,
    },
  ],
};

let risq_q2_sedatives = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_sedatives_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_sedatives_response = risq2_sedatives_response;

        jatos.studySessionData.risq2_sedatives_response =
          risq2_sedatives_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use sedatives to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_sedatives",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "sedatives",
      survey_question_no: 10,
    },
  ],
};

let risq_q2_hallucinogens = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_hallucinogens_response = parseInt(
          Object.values(responseObj)[0]
        );

        data.risq2_hallucinogens_response = risq2_hallucinogens_response;

        jatos.studySessionData.risq2_hallucinogens_response =
          risq2_hallucinogens_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use hallucinogens to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_hallucinogens",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "hallucinogens",
      survey_question_no: 11,
    },
  ],
};

let risq_q2_opioids = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_opioids_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_opioids_response = risq2_opioids_response;

        jatos.studySessionData.risq2_opioids_response = risq2_opioids_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>I use opioids to feel excitement, to get a thrill, or to feel pleasure.</b>",
        labels: q1_choices,
        name: "RISQ_opioids",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "opioids",
      survey_question_no: 12,
    },
  ],
};

let risq_q2_other = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        subscale: jsPsych.timelineVariable("subscale"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [
        { statement: "1.5em", response: "1.15em", preamble: "1.15em" },
      ],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let risq2_other_response = parseInt(Object.values(responseObj)[0]);

        data.risq2_other_response = risq2_other_response;

        jatos.studySessionData.risq2_other_response = risq2_other_response;
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt: function () {
          let otherDrug =
            jatos.studySessionData.all_drugs?.other_text ||
            "your specified drug";
          return `<b>I use ${otherDrug} to feel excitement, to get a thrill, or to feel pleasure.</b>`;
        },
        labels: q1_choices,
        name: "RISQ_other",
        required: true,
      },
      questionnaire: "RISQ",
      subscale: "other",
      survey_question_no: 13,
    },
  ],
};

let risq_q2 = {
  timeline: [
    risq_q2_instructions,
    risq_q2_default,
    {
      timeline: [risq_q2_tobacco],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.tobacco === true;
      },
    },
    {
      timeline: [risq_q2_alcohol],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.alcohol === true;
      },
    },
    {
      timeline: [risq_q2_cannabis],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.cannabis === true;
      },
    },
    {
      timeline: [risq_q2_cocaine],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.cocaine === true;
      },
    },
    {
      timeline: [risq_q2_amphetamine],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.amphetamine === true;
      },
    },
    {
      timeline: [risq_q2_inhalants],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.inhalants === true;
      },
    },
    {
      timeline: [risq_q2_sedatives],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.sedatives === true;
      },
    },
    {
      timeline: [risq_q2_hallucinogens],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.hallucinogens === true;
      },
    },
    {
      timeline: [risq_q2_opioids],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.opioids === true;
      },
    },
    {
      timeline: [risq_q2_other],
      conditional_function: function () {
        let all_drugs = jatos.studySessionData["all_drugs"];
        return all_drugs && all_drugs.other === true;
      },
    },
  ],
};

let risq = {
  timeline: [risq_q1, risq_q2],
};

//CHECKING FREQ
let check_freq_choices = [
  "<p>Not every day</p>",
  "<p>At least once a day</p>",
  "<p>At least once every 6 hours</p>",
  "<p>At least once every 2 hours</p>",
  "<p>At least once every hour</p>",
  "<p>At least once every 15 minutes</p>",
];

let check_freq_questions = {
  timeline: [
    {
      type: jsPsychSurveyLikert,
      questions: [jsPsych.timelineVariable("question")],
      data: {
        questionnaire: jsPsych.timelineVariable("questionnaire"),
        question_no: jsPsych.timelineVariable("survey_question_no"),
      },
      scale_width: "1000",
      font_size: [{ statement: "1.5em", response: "1.5em", preamble: "1.5em" }],
      button_label: "Next",
      on_finish: function (data) {
        let responseObj = jsPsych.data.get().last(1).values()[0].response;
        let check_freq_response = parseInt(Object.values(responseObj)[0]);
        data.check_freq_response = check_freq_response + 1;

        if (!jatos.studySessionData.check_freq_responses) {
          jatos.studySessionData.check_freq_responses = [];
        }

        jatos.studySessionData.check_freq_responses.push({
          question: jsPsych.timelineVariable("questionnaire"),
          question_no: jsPsych.timelineVariable("survey_question_no"),
          response: data.check_freq_response,
        });
      },
    },
  ],
  timeline_variables: [
    {
      question: {
        prompt:
          "<b>How frequently do you check your TikTok account during the day (if you have the opportunity to do so)?</b>",
        labels: check_freq_choices,
        name: "check_freq",
        required: true,
      },
      questionnaire: "CHECK_FREQ",
      survey_question_no: 1,
    },
  ],
};

let check_freq = {
  timeline: [check_freq_questions],
};

//END
let thank_you = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    '<div style="font-size:1.25em;line-height:1.5;color:#00008B;max-width:1200px;">' +
    '<h2 style="font-size:1.25em;margin-bottom:1.5em;text-align:center;line-height:1.5">Thank you for participating in the experiment!</h2>' +
    '<p>Please press "End" to complete the experiment.</p>' +
    "</div>",
  choices: ["End"],
};

//TIMELINE
let questionnaire_order = jsPsych.randomization.shuffle([
  bsmas,
  bis,
  phq,
  gad,
  cius,
  assist,
]);

let all_questions = {
  timeline: questionnaire_order,
};

let order = {
  timeline: [
    task,
    tiktok,
    tiktok_task,
    engagement,
    check_freq,
    all_questions,
    risq,
    thank_you,
  ],
};
timeline.push(order);

//START
jatos.onLoad(() => {
  subj_id = jatos.urlQueryParameters.SUBJ_ID;
  session_id = jatos.urlQueryParameters.SESSION_ID;
  jsPsych.data.addProperties({ subj_id: subj_id, session_id: session_id });
  jsPsych.run(timeline);
});
