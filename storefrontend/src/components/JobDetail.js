import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/jobDetail";
import {Grid, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

const JobDetail = (props) => {

    useEffect(()=>{
        props.fetchAllJobDetail()
    },[])

    return (
        <Grid container>
                
                <Grid item lg={12} xs={12}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>JobId</TableCell>
                                    <TableCell>JobType</TableCell>
                                    <TableCell>Salary</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>DateTimeSaved</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.jobDetailList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.jobId}</TableCell>
                                            <TableCell>{record.jobType}</TableCell>
                                            <TableCell>{record.salary}</TableCell>
                                            <TableCell>{record.title}</TableCell>
                                            <TableCell>{record.description}</TableCell>
                                            <TableCell>{record.dateTimeSaved}</TableCell>
                                            
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
    )
}

const mapStateToProps = state => {
    return {
        jobDetailList:state.jobDetail.list
    }
}

const mapActionToProps = {
    fetchAllJobDetail:actions.fetchall
}


export default connect(mapStateToProps,mapActionToProps)(JobDetail);