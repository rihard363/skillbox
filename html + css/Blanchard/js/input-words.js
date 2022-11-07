$('body').on('input', '.input-words', function(){
	this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
});
