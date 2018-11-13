import moment from 'moment';

const formatDate = (date) => {
	if(!date) {
		return false;
	}
	return moment(new Date(date)).format('DD.MM.YYYY');
}

export default formatDate;