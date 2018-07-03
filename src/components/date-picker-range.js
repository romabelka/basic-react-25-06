import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DatePickerRange extends React.Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this)
        this.onClear = this.onClear.bind(this)
        this.state = this.nullState
    }

    get nullState() {
        return  {
            from: null,
            to:  null
        }
    }

    onSelect(day) {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }
    onClear() {
        this.setState(this.nullState);
    }
    render() {
        const { from, to } = this.state;
        return (
            <div>
                <div>
                    {from &&
                        <span>Selected from {from.toLocaleDateString()}<br/></span> }
                    {to &&
                        <span>Selected to {to.toLocaleDateString()}<br/></span> }
                    {(from || to) &&
                        <button className="link" onClick={this.onClear}>clear</button> }
                </div>
                <DayPicker
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.onSelect}/>
            </div>
        );
    }
}