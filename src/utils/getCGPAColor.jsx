function getCGPAColor(cgpa) {
    if(!cgpa) return 'secondary'
    if (cgpa >= 8.0) return 'success'
    if (cgpa >= 7.0) return 'warning'
    return 'danger'
}

export default getCGPAColor