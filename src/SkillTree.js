import React, { Component } from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import MyNavbar from './MyNavbar';

class SkillTree extends Component {
    constructor(props) {
        super(props);
        this.state = { skills: [] };
    }

    componentDidMount() {
        fetch('api/skills').then(response => response.json())
            .then(data => this.setState({ skills: data }));
    }

    render() {
        const { skills } = this.state;
        let frontArray = [];
        let backendArray = [];
        let databaseArray = [];
        skills.forEach((skill) => {
            switch (skill.type) {
                case 'Frontend':
                    frontArray.push({ name: skill.name });
                    break;
                case 'Backend':
                    backendArray.push({ name: skill.name });
                    break;
                case 'Database':
                    databaseArray.push({ name: skill.name });
                    break;
                default:
                    break;
            }
        });
        const data = {
            name: 'Skills',
            children: [{
                name: 'Frontend',
                children: frontArray
            },{
                name: 'Backend',
                children: backendArray
            },{
                name: 'Database',
                children: databaseArray
            }]
        }
        return (
            <div >
                <MyNavbar />
                <div className="custom-container">


                    <Tree
                        data={data}
                        height={600}
                        width={1150}
                        svgProps={
                            { className: 'custom' }
                        }
                        animated />
                </div>
            </div>
        )
    }

}

export default SkillTree;