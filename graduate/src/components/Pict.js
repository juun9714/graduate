import '../App.css';
import axios from 'axios'
import "../public/style_pict.css";
import React, { Component } from 'react';

class Pict extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleShow: false,
            pic_title: ["pict1", "pict2", "pict3"],
            pic_path: ["../public/images/gal1.jpg", "../public/images/gal2.jpg", "../public/images/gal3.jpg"],
        }
    }

    render() {

        //http:// 추가 안해주면 network err 남

        //"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\Temp"
        //터미널에서 실행하면 불안전한 버전으로 크롬 켜지고, 그 크롬에서 리액트 실행하면, CORS 차단 안먹고 axios 실행됨
        var tmp=[]
        function getPost(id){
            axios.get("http://localhost:8000/"+id).then(response=>{
                console.log(response)
            }).catch((err)=>{
                console.log(err)
            })
        }
        

        var path
        var pict = null
        var pict_tit = null
        if (this.props.index === 1) {
            pict_tit = <div id="pic_tit">{this.state.pic_title[0]}</div>
            pict = <a href="#"><img id="picts" onMouseOver={() => {
                this.setState({
                    titleShow: true
                })
            }} onMouseLeave={() => {
                this.setState({
                    titleShow: false
                })
            }} onClick={()=>{
                getPost(1)
                //클릭하면 해당 사진이랑 글이랑 제목이랑 날짜 가져오기 -> 장고에서 바로 이미지를 가져올 수는 없나 ..?
            }} alt="" src="http://localhost:8000/media/gal1_zqRPCAN.jpg"></img></a>
        } else if (this.props.index === 2) {
            pict_tit = <div id="pic_tit">{this.state.pic_title[1]}</div>
            pict = <a href="#"><img id="picts" onMouseOver={() => {
                this.setState({
                    titleShow: true
                })
            }} onMouseLeave={() => {
                this.setState({
                    titleShow: false
                })
            }} alt="" src={require("../public/images/gal2.jpg")}></img></a>
        } else if (this.props.index === 3) {
            pict_tit = <div id="pic_tit">{this.state.pic_title[2]}</div>
            pict = <a href="#"><img id="picts" onMouseOver={() => {
                this.setState({
                    titleShow: true
                })
            }} onMouseLeave={() => {
                this.setState({
                    titleShow: false
                })
            }} alt="" src={require("../public/images/gal3.jpg")}></img></a>
        }

        return (
            <div>
                {this.state.titleShow ? pict_tit : null}
                {pict}
            </div>
        );
    }
}

export default Pict;