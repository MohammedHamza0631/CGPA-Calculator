function calcCGPA(semesters) {
    let cgpa = 0
    let weightedSgpaSum = 0
    let creditsSum = 0
    return semesters.map((sem, index) => {
      weightedSgpaSum += parseFloat(sem.credits) * parseFloat(sem.sgpa)
      creditsSum += parseFloat(sem.credits)
      cgpa = weightedSgpaSum / creditsSum
      sem.cgpa = cgpa.toFixed(2)
      return sem
    })
}

export default calcCGPA