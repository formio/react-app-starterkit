import _ from 'lodash';

const getPermissionsFormGrid = (forms, user) => {
    forms.forms.forEach(form => {
        form.perms = calculateFormPerms(form.access, form.owner, user, form.submissionAccess);
    })

    return forms;
}

const calculateFormPerms = (access, owner, user, subAccess) => {
    const rolePermKey = {
        read_all: 'data',
        update_all: 'edit',
        delete_all: 'delete',
    }

    let perms = {}

    if (user) {
        if (owner === user._id) {
            perms = {
                edit: true,
                delete: true,
                view: true,
                data: true,
            }
        }
        else {
            if (_.isArray(subAccess)) {
                subAccess.forEach(({ roles, type }) => {
                    if (type === 'create_all') {
                        perms.view = roles.length > 0
                            && _.intersection(roles, user.roles).length > 0;
                    }
                })
            }
            else {
                rolePermKey.create_all = 'view';
            }

            if (_.isArray(access)) {
                access.forEach(({ roles, type }) => {
                    if (rolePermKey[type]) {
                        if (roles.length > 0
                            && _.intersection(roles, user.roles).length > 0) {
                            perms[rolePermKey[type]] = true;
                        }
                        else {
                            perms[rolePermKey[type]] = false;
                        }
                    }
                })
            }
        }
    }
    else {
        perms = {
            edit: false,
            delete: false,
            view: false,
            data: false,
        }
    }

    return perms;
}


export {
    calculateFormPerms,
    getPermissionsFormGrid
}