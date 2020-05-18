def get_client_id(self, obj):
    return obj.client.id


def get_first_name(self, obj):
    return obj.client.first_name


def get_generic_name(self, obj):
    return obj.client.generic_name


def get_last_name(self, obj):
    return obj.client.last_name


def get_phone_number(self, obj):
    return obj.client.phone_number


def get_status(self, obj):
    if obj.date_finished:
        return 'Сдан'
    else:
        return 'В работе'
