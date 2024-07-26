import React from 'react';
import "./Lecturelog.css"
const Logobook = () => {
    return (
        <div>
            <div className="mylogbook">
            <h1>this is lecture one</h1>
                <span>LOGBOOK</span>
                <div className="logcontent">
                    <table border="1">
                        <tr>
                            <th>Day</th>
                            <th>Description of activity performed</th>
                            <th>Tools, machinery, equipment and methodology</th>
                            <th>N0 of hours per day</th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>Monday</td>
                            <td>Monday</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>Monday</td>
                            <td>Monday</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>Monday</td>
                            <td>Monday</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>Monday</td>
                            <td>Monday</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Friday
                            </td>
                            <td>Monday</td>
                            <td>Monday</td>
                            <td>2</td>
                        </tr>

                        <tr>
                            <td colSpan={3}>Total Hours</td>
                            <td> 4 hours</td>
                        </tr>

                    </table>


                    <div className="tasks">
                        <form action="">
                           <div className="activity">
                           <label htmlFor="activity">Activity:</label>
                            <input type="text" name="activity" placeholder="Enter the activity or task of the day." required />

                           </div>
                            <div className="tools">
                            <label htmlFor="tools">Tools:</label>
                            <input type="text" name="tools" placeholder="Enter the tools used to perfom task of the day." required />

                            </div>

                            <div className="date" >
                                <label htmlFor="date">Date:</label>
                                <input type="date" name='date' id="date" required/>
                            </div>
                            <div className="hours">       <div className="date" >
                                <label htmlFor="hours">Hours:</label>
                                <input type="number" name='hours' id="hours" placeholder="hours ex: 3" required/>
                            </div></div>
                            <input type="submit" value="Submit"  />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logobook;
