const Instructor = require('../instructor/instructorModel');

exports.createInstructor = async (req, res) => {

    const { firstName, lastName, documentType, documentNumber, phoneNumber,profession } = req.body;

    const instructor = new Instructor({
        firstName,
        lastName,
        documentType,
        documentNumber,
        phoneNumber,
        profession
    });

    try {
        const newInstructor = await instructor.save();
        res.status(201).json(newInstructor);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear el instructor' });
    }
};

exports.getAllInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find();

        if (instructors.length === 0) {
            return res.status(404).json({ message: 'No se encontraron instructores registrados' });
        }
        res.json(instructors);
    } catch (err) {
        res.status(500).json({ message: 'Ocurrió un error al obtener los instructores' });
    }
};

exports.getInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);

        if (!instructor) {
            return res.status(404).json({ message: 'Instructor no encontrado' });
        }
        res.json(instructor);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener el instructor' });
    }
};

exports.updateInstructor = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);

        if (!instructor) {
            return res.status(404).json({ message: 'Instructor no encontrado' });
        }

        const { firstName, lastName, documentType, documentNumber, phoneNumber, profession } = req.body;

        // Actualizar solo los campos que se proporcionan en la solicitud
        instructor.firstName = firstName || instructor.firstName;
        instructor.lastName = lastName || instructor.lastName;
        instructor.documentType = documentType || instructor.documentType;
        instructor.documentNumber = documentNumber || instructor.documentNumber;
        instructor.phoneNumber = phoneNumber || instructor.phoneNumber;
        instructor.profession = profession || instructor.profession;


        if (firstName != null) instructor.firstName = firstName;
        if (lastName != null) instructor.lastName = lastName;
        if (documentType != null) instructor.documentType = documentType;
        if (documentNumber != null) instructor.documentNumber = documentNumber;
        if (phoneNumber != null) instructor.phoneNumber = phoneNumber;
        if (profession != null) instructor.phoneNumber = profession;


        const updatedInstructor = await instructor.save();
        res.json(updatedInstructor);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al actualizar el instructor' });
    }
};

exports.deleteInstructor = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);

        if (!instructor) {
            return res.status(404).json({ message: 'Instructor no encontrado' });
        }

        await instructor.deleteOne(); // Eliminar el instructor directamente sin asignarlo a una variable

        res.json({ message: 'Instructor eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el instructor:', error);
        res.status(500).json({ message: 'Ocurrió un error al eliminar el instructor' });
    }
};
