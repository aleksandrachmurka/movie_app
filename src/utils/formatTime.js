import moment from 'moment';

const formatTime = (date) => {
	if(!date) {
		return false;
	}

	return moment(new Date(date)).format('HH:mm');
}

export default formatTime;