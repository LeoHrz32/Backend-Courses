const Apprentice = require('../apprentice/apprenticeModel');

exports.getAllApprentices = async (req, res) => {
    try {
        const apprentices = await Apprentice.find();
        if (apprentices.length === 0) {
            return res.status(404).json({ message: 'No se encontraron aprendices' });
        }
        res.json(apprentices);
    } catch (err) {
        res.status(500).json({ message: 'Ocurrió un error al obtener los aprendices' });
    }
};


exports.getApprenticeById = async (req, res) => {
    try {
        const apprentice = await Apprentice.findById(req.params.id);
        if (!apprentice) {
            return res.status(404).json({ message: 'Aprendiz no encontrado' });
        }
        res.json(apprentice);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al obtener el aprendiz' });
    }
};




exports.createApprentice = async (req, res) => {
    const { firstName, lastName, documentType, documentNumber, phoneNumber } = req.body;
    const apprentice = new Apprentice({
        firstName,
        lastName,
        documentType,
        documentNumber,
        phoneNumber,
    });
    

    try {
        const newApprentice = await apprentice.save();
        res.status(201).json(newApprentice);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al crear el aprendiz' });
    }
};

exports.updateApprentice = async (req, res) => {
    try {
        const apprentice = await Apprentice.findById(req.params.id);
        if (!apprentice) {
            return res.status(404).json({ message: 'Aprendiz no encontrado' });
        }
        
        const { firstName, lastName, documentType, documentNumber, phoneNumber } = req.body;
        if (firstName != null) apprentice.firstName = firstName;
        if (lastName != null) apprentice.lastName = lastName;
        if (documentType != null) apprentice.documentType = documentType;
        if (documentNumber != null) apprentice.documentNumber = documentNumber;
        if (phoneNumber != null) apprentice.phoneNumber = phoneNumber;

        const updatedApprentice = await apprentice.save();
        
        res.json(updatedApprentice);
    } catch (error) {
        res.status(400).json({ message: 'Ocurrió un error al actualizar el aprendiz' });
    }
};

exports.deleteApprentice = async (req, res) => {
    try {
        const apprentice = await Apprentice.findById(req.params.id);

        if (!apprentice) {
            return res.status(404).json({ message: 'Aprendiz no encontrado' });
        }
        await apprentice.deleteOne();
        res.json({ message: 'Aprendiz eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error al eliminar el aprendiz' });
    }
};