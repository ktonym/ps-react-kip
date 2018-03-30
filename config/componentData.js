module.exports = /* eslint-disable */ [{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"\"World\"","computed":false}}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\n\r\n/**\r\n * A super lame component that says Hello with a custom message\r\n */\r\nfunction HelloWorld({message}) {\r\n    return <div>Hello {message}</div>\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n    /** Message to display */\r\n    message: PropTypes.string\r\n};\r\n\r\nHelloWorld.defaultProps = {\r\n    message: \"World\"\r\n};\r\n\r\nexport default HelloWorld;","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from \"react\";\r\nimport HelloWorld from \"ps-react-kip/HelloWorld\";\r\n\r\n/** Custom message */\r\nconst ExampleHelloWorld = () => {\r\n    return <HelloWorld message=\"Northern White Lovers!\"/>\r\n};\r\n\r\nexport default ExampleHelloWorld;"}]},{"name":"Label","description":"Label with required field display,htmlFor and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\n\r\n/** Label with required field display,htmlFor and block styling */\r\nclass Label extends React.Component{\r\n    render(){\r\n        const {htmlFor,label,required} = this.props;\r\n        return(\r\n            <label style={{display: 'block'}} htmlFor={htmlFor}>\r\n                {label} { required && <span style={{color: 'red'}}> *</span>}\r\n            </label>\r\n        );\r\n    }\r\n\r\n}\r\n\r\nLabel.propTypes = {\r\n    /** HTML ID for associated input*/\r\n    htmlFor: PropTypes.string.isRequired,\r\n\r\n    /** Label text*/\r\n    label: PropTypes.string.isRequired,\r\n\r\n    /** Display asterisk after label if true*/\r\n    required: PropTypes.bool\r\n};\r\n\r\nexport default Label;","examples":[{"name":"ExampleMandatory","description":"Required Label","code":"import React from \"react\";\r\nimport Label from \"ps-react-kip/Label\";\r\n\r\n/** Required Label*/\r\nconst ExampleMandatory = () => (\r\n    <Label htmlFor=\"test\" label=\"Mandatory\" required/>\r\n);\r\n\r\nexport default ExampleMandatory;"},{"name":"ExampleOptional","description":"Optional Label","code":"import React from \"react\";\r\nimport Label from \"ps-react-kip/Label\";\r\n\r\n/** Optional Label*/\r\nconst ExampleOptional = () => (\r\n    <Label htmlFor=\"test\" label=\"Test\" />\r\n);\r\n\r\nexport default ExampleOptional;"}]},{"name":"ProgressBar","description":"Horizontal Progress Bar","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\n\r\n/** Horizontal Progress Bar*/\r\nclass ProgressBar extends React.Component{\r\n\r\n    getColor = (percent) => {\r\n        if(this.props.percent === 100) return 'green';\r\n        return this.props.percent > 50 ? 'lightgreen' : 'red';\r\n    };\r\n\r\n    getWidthAsPercentOfTotalWidth = () => {\r\n        return parseInt(this.props.width * (this.props.percent / 100),10);\r\n    };\r\n\r\n    render(){\r\n        const {percent,width,height} = this.props;\r\n        return(\r\n            <div style={{border: 'solid 1px lightgray', width:width}}>\r\n                <div style={{\r\n                    width: this.getWidthAsPercentOfTotalWidth(),\r\n                    height,\r\n                    backgroundColor: this.getColor(percent)\r\n                }}/>\r\n            </div>\r\n        );\r\n    }\r\n\r\n}\r\n\r\nProgressBar.propTypes = {\r\n    /** Percent of progress completed */\r\n    percent: PropTypes.number.isRequired,\r\n\r\n    /** Bar width */\r\n    width: PropTypes.number.isRequired,\r\n\r\n    /** Bar height */\r\n    height: PropTypes.number\r\n};\r\n\r\nProgressBar.defaultProps = {\r\n    height: 5\r\n};\r\n\r\nexport default ProgressBar;","examples":[{"name":"Example100Percent","description":"100% Progress and height 20px","code":"import React from \"react\";\r\nimport ProgressBar from \"ps-react-kip/ProgressBar\";\r\n\r\n/** 100% Progress and height 20px*/\r\nconst Example100Percent = () => (\r\n    <ProgressBar width={100} percent={100} height={20}/>\r\n);\r\n\r\nexport default Example100Percent;"},{"name":"Example10Percent","description":"10% progress","code":"import React from \"react\";\r\nimport ProgressBar from \"ps-react-kip/ProgressBar\";\r\n\r\n/** 10% progress */\r\nconst Example10Percent = () => (\r\n    <ProgressBar percent={10} width={100}/>\r\n);\r\n\r\nexport default Example10Percent;"},{"name":"Example70Percent","description":"70% progress","code":"import React from \"react\";\r\nimport ProgressBar from \"ps-react-kip/ProgressBar\";\r\n\r\n/** 70% progress */\r\nconst Example70Percent = () => (\r\n    <ProgressBar percent={70} width={100}/>\r\n);\r\n\r\nexport default Example70Percent;"}]}]