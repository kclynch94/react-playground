import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };
    state = {
        currentSectionIndex: 0
    };
    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
    }
    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                {section.title}
                </button>
                {this.renderContent(index)}
            </li>
        ))
    }
    renderContent(index) {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        if (this.state.currentSectionIndex===index) {
            return (
                <li className='content'>
                    <p>{currentSection.content}</p>
                </li>
            )
        }
    }
    render () {
        return (
            <div>
                <ul>
                    {this.renderButtons()}
                    
                </ul>
            </div>
        )
    }
}

export default Accordion;