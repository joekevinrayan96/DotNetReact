import React, {useState} from "react";
import {TextField, InputLabel, MenuItem, Select, Button} from "@material-ui/core";
import UseForm from "./UseForm";
import { connect } from "react-redux";
import * as actions from "../actions/jobDetail";

const JobForm = (props) => {

    const initialFieldValues = {
        jobType: '',
        salary: '',
        title: '',
        description: '',
        dateTimeSaved: ''

    }

    

    //const [values, setValues] = useState(initialFieldValues)

    const {
        values,
        setValues,
        handleInputChange

    }= UseForm(initialFieldValues)


    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleSubmit = e =>{
        e.preventDefault()

        props.createJobDetail(values,()=>{window.alert('inserted')})
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <p>
                        <InputLabel ref={inputLabel}>Job Type</InputLabel>
                        <Select
                            name="jobType"
                            value={values.jobType}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">Select Job Type</MenuItem>
                            <MenuItem value="FrontEnd">Front End</MenuItem>
                            <MenuItem value="BackEnd">Back End</MenuItem>
                            <MenuItem value="FullStack">Full Stack</MenuItem>
                            
                        </Select>
                        </p>
                        <p>
                         <TextField
                        name="salary"
                        variant="outlined"
                        label="Salary"
                        value={values.salary}
                        onChange={handleInputChange}
                        />
                        </p>
                        <p>
                         <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        value={values.title}
                        onChange={handleInputChange}
                        />
                        </p>
                        <p>
                         <TextField
                        name="description"
                        variant="outlined"
                        label="Description"
                        value={values.description}
                        onChange={handleInputChange}
                        />
                        </p>
                        <p>
                         <TextField
                        name="dateTimeSaved"
                        variant="outlined"
                        label="Date"
                        value={values.dateTimeSaved}
                        onChange={handleInputChange}
                        />
                        </p>

                        <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            
                            //onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        jobDetailList:state.jobDetail.list
    }
}

const mapActionToProps = {
    createJobDetail:actions.create
}

export default connect(mapStateToProps, mapActionToProps) (JobForm);