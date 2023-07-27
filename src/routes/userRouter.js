const express = require("express");
const path = require('path');
const fs = require('fs');
const { EducationList } = require("../models/educationModel");
const { response } = require("express");
const { UserBasicInfo } = require("../models/adminUsersModels");
const userRouter = express.Router();
const sendEmail = require('../models/smtpEmails');
//const nodemailer = require('nodemailer');

userRouter.post('/profileupload', (request, response) =>
{
    try
    {
        let upload_file = request.files.file1;
        let ext = path.extname(upload_file.name);
        let userid = request.body.userid;
        let upload_path = path.resolve(process.cwd(), `public${path.sep}photos${path.sep}${userid}${ext}`);
        upload_file.mv(upload_path, (err) =>
        {
            if (err) response.status(500).send(err);
            else
            {
                UserBasicInfo.findByIdAndUpdate(userid, { photo: ext }).then((res, err) =>
                {
                    if (request.body.photo !== '' && ext !== request.body.photo)
                    {
                        let exits_file = path.resolve(process.cwd(), `public${path.sep}photos${path.sep}${userid}${request.body.photo}`);
                        fs.stat(exits_file, function (err)
                        {
                            if (err === null)
                            {
                                fs.unlinkSync(exits_file);
                                response.json({ success: true, ext });
                            } else response.json({ success: true, ext });
                        });
                    } else response.json({ success: true, ext });
                });
            }
        });
    } catch (err)
    {
        response.status(500).json({ success: false, message: err.message });
    }
});

userRouter.post('/document_upload', (request, response) =>
{
    try
    {
        let upload_file = request.files.file1;
        let file_record = JSON.parse(request.body.file_record);
        let upload_path = path.resolve(process.cwd(), `public${path.sep}documents${path.sep}${file_record.filename}`);
        upload_file.mv(upload_path, (err) =>
        {
            if (err) response.status(500).send(err);
            else
            {
                EducationList.updateOne({ _id: request.body._id }, { $push: { [`schools.${request.body.recindex}.documents`]: file_record } }).then((res, err) =>
                {
                    response.json({ success: true });
                });
            }
        });
    } catch (err)
    {
        response.status(500).json({ success: false, message: err.message });
    }
});
userRouter.post('/delete_document', async (request, response) =>
{
    try
    {
        await EducationList.updateOne({ _id: request.body._id }, { $pull: { [`schools.${request.body.recindex}.documents`]: { id: request.body.fileid } } })
        const file_path = path.resolve(process.cwd(), `public${path.sep}documents${path.sep}${request.body.filename}`);
        fs.stat(file_path, function (err)
        {
            if (err === null)
            {
                fs.unlinkSync(file_path);
                response.json({ success: true });
            } else response.json({ success: true });
        });
    } catch (err)
    {
        response.status(500).json({ success: false, message: err.message });
    }
});
userRouter.get('/test', async (request, response) =>
{
    // EducationList.find({"schools": {$elemMatch: {id: 'epAMCQG_wPB5WpchJhstC'}}}).then((res)=>{
    //     response.json(res);
    // });

    EducationList.updateOne({ _id: "630e1814e0c339c65ab5d707" }, { $push: { "schools.0.documents": { "test": "one" } } }).then((res, err) =>
    {
        console.log(res, err);
        response.json({ success: true });
    }, { upsert: true });
});
module.exports = userRouter;