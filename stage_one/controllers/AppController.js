import moment from 'moment-timezone';
import asyncHandler from 'express-async-handler';
// import ClientError from '../errors/clientError.js';


class AppController {
  static slackAndTrack = asyncHandler(async (req, res, next) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;

    // if (track !== 'backend') {
    //   const error = new ClientError('Invalid track');
    //   return next(error);
    // }

    const currentDay = moment().tz('UTC').format('dddd');

    const utcTime = moment().tz('UTC').format('YYYY-MM-DDTHH:mm:ss[Z]');

    return res.status(200).json({
      slack_name: slackName,
      current_day: currentDay,
      utc_time: utcTime,
      track: track,
      github_file_url: 'https://github.com/ayobamy/hngx_projects/blob/main/stage_one/server.js',
      github_repo_url: 'https://github.com/ayobamy/hngx_projects/tree/main/stage_one',
      status_code: res.statusCode.toString(),
    })
  })
}

export default AppController;
