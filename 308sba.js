const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];



function getLearnerData(course, ag, submissions) {
  if (ag.course_id !== course.id) {
    throw new Error("Input is wrong");
  }
  let result = [];
  let studentNum = [];

  // Collect unique learner IDs
  for (let learnerSubmission of submissions) {
    if (studentNum.indexOf(learnerSubmission.learner_id) === -1) {
      studentNum.push(learnerSubmission.learner_id);
    }
  }

  // Process each unique learner
  for (let i = 0; i < studentNum.length; i++) {
    let learner_id = studentNum[i];
    let idData = { id: learner_id };
    let totWeightScored = 0;
    let totPossiblePoints = 0;
    let assignmentsScores = {};
    
    for (let submission of submissions) {
      if (submission.learner_id === learner_id) {
        // submission is the test, the learner is the student name/unique id number
        for (let assignment of ag.assignments) {
          // assignment number needs to matche witht the assignment unique id number
          if (assignment.id === submission.assignment_id) {
            // Check if the assignment is due
            let dueDate = new Date(assignment.due_at);
            // not turning into a string 
            let submittedDate = new Date(submission.submission.submitted_at);

            let score = submission.submission.score;

            // Deduct 10% for late submissions
            if (submittedDate > dueDate) {
              score *= 0.9;
            }

            // Calculate totals
            totWeightScored += score;
            totPossiblePoints += assignment.points_possible;
console.log(getLearnerData)

};
        }
      }
    }
  }
}

