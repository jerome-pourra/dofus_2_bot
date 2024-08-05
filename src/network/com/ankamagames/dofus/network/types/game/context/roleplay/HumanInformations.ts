import { ActorRestrictionsInformations } from "./../../character/restriction/ActorRestrictionsInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanInformations
{

	public static readonly protocolId: number = 495;

	public restrictions: ActorRestrictionsInformations;
	public sex: boolean = false;
	public options: Array<HumanOption>;

    public constructor()
    {
        this.restrictions = new ActorRestrictionsInformations();
        this.options = Array<HumanOption>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanInformations(input);
    }

    private deserializeAs_HumanInformations(input: ICustomDataInput)
    {
        let _id3: number = 0;
        let _item3: HumanOption;
        this.restrictions = new ActorRestrictionsInformations();
        this.restrictions.deserialize(input);
        this._sexFunc(input);
        let _optionsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _optionsLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(HumanOption,_id3);
            _item3.deserialize(input);
            this.options.push(_item3);
        }
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

}