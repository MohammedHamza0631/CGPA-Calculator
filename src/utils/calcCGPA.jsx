function calcCGPA(semesters) {
  let weightedSgpaSum = 0;
  let creditsSum = 0;

  return semesters.map((sem, index) => {
    const sgpa = parseFloat(sem.sgpa);
    const credits = parseFloat(sem.credits);

    if (!isNaN(sgpa) && !isNaN(credits)) {
      weightedSgpaSum += sgpa * credits;
      creditsSum += credits;
    }

    const cgpa = (sgpa && credits) ? (weightedSgpaSum / creditsSum).toFixed(2) : '';
    return { ...sem, cgpa };
  });
}

export default calcCGPA;

