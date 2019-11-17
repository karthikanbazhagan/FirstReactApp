import React, { Component } from 'react';

class Slider extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            index: 0,
            translateValue: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    render()
    {
        return(
            <div className='slider'>
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    <i><SlideOne index={this.state.index}/></i> 
                    <i><SlideTwo index={this.state.index}/></i>
                    <i><SlideThree index={this.state.index}/></i>
                </div>
                
                {this.renderLeftArrow()}
                {this.renderRightArrow()}

                <div className="dots-container">
                    {this.renderDot(0)}
                    {this.renderDot(1)}
                    {this.renderDot(2)}
                </div>
            </div>
        );
    }

    renderLeftArrow()
    {
        if(this.state.index !== 0)
        {
            return <LeftArrow previousSlide={this.previousSlide} index={this.state.index}/>
        }
    }

    renderRightArrow()
    {
        if(this.state.index !== 2)
        {
            return <RightArrow nextSlide={this.nextSlide} index={this.state.index}/>
        }
    }

    renderDot(i)
    {
        let dotname = this.state.index == i? 'dot active' : 'dot'
        return <Dot name={dotname} onClick={() => this.handleDotClick(i)}/>
    }

    handleDotClick(i)
    {
        this.setState(
            {
                translateValue: (-i * this.slideWidth()),
                index: i,
            }
        );
    }

    nextSlide() {
        let i = this.state.index+1;
        i= i>2?1:i;
        this.setState({ 
            index: i ,
            translateValue: (-i * this.slideWidth()),
            
        });
    }
    
    previousSlide() {
        let i = this.state.index-1;
        i= i<0?2:i;
        this.setState({ 
            index: i,
            translateValue: (-i * this.slideWidth()),
            
        });
    }

    slideWidth(){
        const slide = document.querySelector('.slide')
        return slide.clientWidth
      }
}

function SlideOne(props)
{
    let styles = {
        backgroundImage: 'url(images/image-2.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        height: '500px'
    }

    return(
        <div key ={props.index} className='slide' style={styles}>
        </div>
    );
}

function SlideTwo(props)
{
    let background = {
        backgroundImage: 'url(images/image-4.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        height:'500px',
    }
    return(
        <div key ={props.index} className='slide' style={background}></div>
    );
}

function SlideThree(props)
{
    let background = {
        backgroundImage: 'url(images/image-6.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        height:'500px',
    }
    return(
        <div key ={props.index} className='slide' style={background}>
            
        </div>
    );
}

function LeftArrow(props)
{
    return(
        <div key= {props.index} className='slider-left-arrow' onClick={props.previousSlide} >
             {/*<i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>*/}
             <img src="images/slider-left-arrow.svg" />
            </div>
    );
}

function RightArrow(props)
{
    return(
        <div key= {props.index} className='slider-right-arrow' onClick={props.nextSlide} >
             {/*<i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>*/}
             <img src="images/slider-right-arrow.svg" />
            </div>
    );
}

function Dot(props)
{
    return(
        <div className={props.name}
        onClick={props.onClick}>
      </div>
    )
}


export default Slider;