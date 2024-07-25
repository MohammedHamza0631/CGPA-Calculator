function getBarColor(cgpa) {
    if(!cgpa) return '#1e1e1e'
    if (cgpa >= 8.0) return '#119b4d'
    if (cgpa >= 7.0) return '#ea9e22'
    return '#951c46'
}

export default getBarColor