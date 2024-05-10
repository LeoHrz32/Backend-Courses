const Course = require('../course/courseModel');

exports.createCourse = async (req, res) => {
    const { name, description, startDate, location, time, state, detail } = req.body;

    const course = new Course({
        name,
        description,
        startDate,
        location,
        time,
        state,
        detail
    });

    try {
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: 'Error creating course' });
    }
};

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        if (courses.length === 0) {
            return res.status(404).json({ message: 'No courses found' });
        }
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching courses' });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course' });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const { name, description, startDate, location, time, state, detail } = req.body;

        course.name = name || course.name;
        course.description = description || course.description;
        course.startDate = startDate || course.startDate;
        course.location = location || course.location;
        course.time = time || course.time;
        course.state = state || course.state;
        course.detail = detail || course.detail;

        const updatedCourse = await course.save();
        res.json(updatedCourse);
    } catch (error) {
        res.status(400).json({ message: 'Error updating course' });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.deleteOne();

        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Error deleting course' });
    }
};
