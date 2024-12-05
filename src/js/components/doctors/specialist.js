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
        super(name, "especialista en traumatología.", image, experience, diplomas);
    }

    performSurgery() {
        return `${this._name} se desempeña en cirugía traumatológica.`;
    }
    price() {
        return $20000;
    }
}

class otorrinolaringología extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "Oespecialista en otorrinolaringología.", image, experience, diplomas);
    }

    treatEarInfection() {
        return `${this._name} trata la infección de oído.`;
    }
    price() {
        return $21000;
    }
}

class kinesiología extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "especialista en kinesiología.", image, experience, diplomas);
    }

    treatEarInfection() {
        return `${this._name} ayuda a mejorar la movilidad del musculo esquelético.`;
    }
    price() {
        return $15000;
    }
}

class gediatría extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "especialista en gediatría.", image, experience, diplomas);
    }

    treatEarInfection() {
        return `${this._name} encargado de la salud del adulto mayor.`;
    }
    price() {
        return $25000;
    }
}

class general extends Doctor {
    constructor(name, image, experience, diplomas) {
        super(name, "Médico General", image, experience, diplomas);
    }

    treatEarInfection() {
        return `${this._name} puede atender cualquier tipo de enfermedad y derivar a un especialista.`;
    }
    price() {
        return $10000;
    }
}

