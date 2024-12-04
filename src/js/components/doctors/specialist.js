class Doctor {
    constructor(name, specialty, image, experience, diplomas) {
        this._name = name;
        this._specialty = specialty;
        this._image = image;
        this._experience = experience;
        this._diplomas = diplomas;
    }

    getInfo() {
        return `Name: ${this._name}, Specialty: ${this._specialty}, Experience: ${this._experience} years`;
    }
}

class traumatología extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "Traumatólogo", image, experience, diplomas);
    }

    performSurgery() {
        return `${this._name} se desempeña en cirugía traumatológica.`;
    }
}

class otorrinolaringología extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "Otorrinolaringólogo", image, experience, diplomas);
    }

    treatEarInfection() {
        return `${this._name} trata la infección de oído.`;
    }
}

class kinesiología extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "Kinesiólogo", image, experience, diplomas);
    }

    treatEarInfection() {
        return `${this._name} ayuda a mejorar la movilidad del musculo esquelético.`;
    }
}

class gediatría extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "Gediatra", image, experience, diplomas);
    }

    treatEarInfection() {
        return `${this._name} encargado de la salud del adulto mayor.`;
    }
}

class general extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "Medico General", image, experience, diplomas);
    }

    treatEarInfection() {
        return `${this._name} puede atender cualquier tipo de enfermedad y derivar a un especialista.`;
    }
}