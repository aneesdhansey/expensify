import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import FontAwesome from 'react-fontawesome'
import { AUTH_PROVIDERS } from '../firebase/firebase'

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button 
                className="button button--google"
                onClick={() => startLogin(AUTH_PROVIDERS.GOOGLE)}>
                <FontAwesome name="google"/> Login with Google
            </button>
             <button 
                className="button button--twitter"
                onClick={() => startLogin(AUTH_PROVIDERS.TWITTER)}>
                <FontAwesome name="twitter"/> Login with Twitter
            </button>
            <button 
                className="button button--github"
                onClick={() => startLogin(AUTH_PROVIDERS.GITHUB)}>
                <FontAwesome name="github"/> Login with GitHub
            </button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: (provider) => dispatch(startLogin(provider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
