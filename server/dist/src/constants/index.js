"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    statMessage: {
        STAT_CREATED: 'Stat Created Successfully',
        STAT_FETCHED: 'Stat Fetched Successfully',
        STAT_UPDATED: 'Stat Updated Successfully',
        STAT_DELETED: 'Stat Deleted Successfully',
        STAT_NOT_FOUND: 'Stat Not Found'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        LOGIN_SUCCESS: 'Login Success',
        DUPLICATE_EMAIL: 'User already exists with the given email',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Incorrect Password'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields',
        TOKEN_MISSING: 'Token missing from header'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
};
