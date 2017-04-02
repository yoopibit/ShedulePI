import React, { Component } from 'react';

class  ScheduleDayDescription extends Component {
    getDayNameByNumber = number => {
        const daysName = ['Mon.', 'Tues.', 'Wed', 'Thu.', 'Fri'];

        if(number >= 1 && number <= 5) {
            return daysName[number - 1];
        }

        throw new Error(`Day ${number} isn't in range [1; 5]`);
    }

    renderClasses = classes => {
        return classes.map((pair, index) => {
            const { number, title, place, teacher } = pair;
            return (
                <section className={ index === 1 
                    ? 'schedule__pair schedule__pair--current'
                    : 'schedule__pair'  } key={ index }>
                    <span className="schedule__pair-number">{ number }</span>
                    <section className="schedule__pair-wrapper">
                        <div className="schedule__pair-description">
                            <h3 className="schedule__pair-title">{ title }</h3>
                            <p className="schedule__pair-place">{ place }</p>
                        </div>

                        <div className="schedule__teacher-description">
                            <div className="schedule__teacher-avatar">
                                <img className="schedule__teacher-image" src="http://pz.lp.edu.ua/images/staff/gavrysh.jpg" alt="Gavrysh"/>
                            </div>
                            <p className="schedule__teacher-name">{ teacher.name }</p>
                        </div>
                    </section>
               </section>
            )
        });
    }

    getDayColorByIndex = index => {
        const className = 'schedule__day-title';

        switch(index) {
            case 1: 
                return `${className}--orange`;
            case 2:
                return `${className}--green`;
           
        }
    }

    render() {
        const { day, classes, index } = this.props;

        return (
            <section className="schedule__day">
                <div className={ `schedule__day-title ` + this.getDayColorByIndex(index) }>
                    { this.getDayNameByNumber(day) }
                </div>
                <section className="schedule__pair-container">
                    { this.renderClasses(classes) }
                </section>
            </section>
        )
    }
}

export default ScheduleDayDescription; 
