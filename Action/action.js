/**
 * http://usejsdoc.org/
 */

function Action(server, rp) {
	var me = this;	
	this.register = function(name, sid, id, type) {
		var act = {}
		if (type == 'on_off') {
			act.type = type;
			act.name = name;
			act.id 	 = id;
			act.sid  = sid;
			act.url  = server+'/v1/ARP/'+rp;
			//act.state= false;
		}
                console.log(act)
		return act;
	}
}

module.exports = {
			  Action:Action
		};



